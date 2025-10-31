import data from "@models/data";
import { Question } from "@models/question";
import "@quiz/questionForm";
import UsersService from "@users/users.service";

export class QuizService {
    private quizContainer = document.querySelector<HTMLDivElement>(".theory");
    private results: boolean[] = [];
    private QuestionInstances: Question[];
    static #instance: QuizService;
    private constructor() {
        this.QuestionInstances = data.map(x => new Question(x.question, x.options, x.correct_options));
    }

    public spawnNameForm() {
        if (!this.quizContainer) {
            return;
        }
        this.quizContainer.innerHTML = "";

        const nameForm = document.createElement('form');
        nameForm.id = "nameForm";
        // nameForm.classList.add("w-full", "h-auto", "flex","flex-col","items-center","justify-center","lg:text-4xl","max-sm:text-3xl","gap-5");

        const labelName = document.createElement('label');
        labelName.htmlFor = "name";
        // labelName.classList.add("text-green-600","font-bold");
        labelName.textContent = "Escribe tu nombre";

        const inputName = document.createElement('input');
        inputName.id = "name";
        inputName.type = "text";
        inputName.autocomplete = "name";
        inputName.required = true;
        // inputName.classList.add("w-full" ,"outline-none" ,"text-center" ,"border-green-600" ,"border-4" ,"rounded-2xl" ,"pl-6" ,"box-border" ,"focus:h-9" ,"transition-all" ,"duration-200" ,"ease-linear" ,"focus:border-x-0" ,"focus:border-t-0" 
        //     ,"focus:border-b-4" ,"focus:p-8" ,"focus:rounded-none" ,"caret-green-600" ,"focus:bg-green-100");

        const submitButton = document.createElement('button');
        submitButton.classList.add("w-auto" ,"h-20" ,"text-center" ,"grid" ,"place-items-center" ,"rounded-lg" ,"bg-green-600" ,"px-5" ,"text-[#1B1B1B]" ,"font-bold" ,"cursor-pointer" ,"active:bg-transparent" ,"active:border-4" ,"active:border-green-600" ,"active:text-green-600");
        submitButton.textContent = "¡Inicia!";

        nameForm.addEventListener('submit', (e) => {
            const input: HTMLInputElement | null = document.querySelector('#name');
            e.preventDefault();
            sessionStorage.setItem('username', (input !== null ? input.value : ''));
            this.quiz(this.QuestionInstances, 0);
        });
        nameForm.append(labelName, inputName, submitButton);
        this.quizContainer.appendChild(nameForm);
    }

    public cleanStorage() {
        sessionStorage.setItem('username',"");
        this.results = [];
    }
    public async showResults() {
        debugger;
        const username = sessionStorage.getItem('username');
        if (this.quizContainer !== null && username) {
            this.quizContainer.textContent = '';
            const div = document.createElement('div');
            div.classList.add('resultContainer');
            const results = ((5.0 / this.QuestionInstances.length) * (this.results.filter((bool) => bool === true).length)).toFixed(2);
            const h2 = document.createElement('h2');
            h2.innerText = `${username ?? 'player'},tu puntaje es ${results}`
            div.append(h2);
            this.quizContainer.append(div);
            this.cleanStorage();
            await UsersService.createUser(username,parseFloat(results));
        }
    }

    public quiz(questions: Question[], index: number) {
        if (this.quizContainer !== null && index <= questions.length - 1) {
            this.quizContainer.innerHTML = '';
            const quest = questions[index];
            const questionComponent = document.createElement('form-question');
            // enableObserver(questionComponent);
            questionComponent.setAttribute('options', questions[index].options.join(','));
            questionComponent.setAttribute('title', quest.question);
            this.quizContainer.append(questionComponent);


            const formQuestion = questionComponent.querySelector('#formQuestion');
            formQuestion?.addEventListener('submit', (e) => {
                e.preventDefault();
                const selectElement = formQuestion.querySelector('select');
                if (selectElement !== null) {
                    this.results.push(quest.isCorrect(selectElement.value));
                }
                index++;
                this.quiz(questions, index);
            });
        } else {
            this.showResults().then(_ => {
                console.log("User created");
            })
            .catch(err => {
                console.error("User creation error:\n\t"+err);
            });
        }
    }

    public static get instance(): QuizService {
        if (!QuizService.#instance) {
            QuizService.#instance = new QuizService();
        }
        return QuizService.#instance;
    }
}