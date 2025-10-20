import renderMathInElement from 'katex/dist/contrib/auto-render';
import "@docs/electricField";
import "@docs/electron";
import "@docs/potential";
import "@docs/proton";
import "@docs/welcome";

type docsType = "welcome" | "proton" | "electron" | "potential" | "electric";

export class DocsService {
    static #instance: DocsService;
    private docsContainer = document.querySelector<HTMLDivElement>(".theory");
    private docsMap: Map<docsType, string>;
    private constructor() {
        this.docsMap = new Map([
            ["welcome", "welcome-docs"],
            ["proton", "proton-docs"],
            ["electron", "electron-docs"],
            ["potential", "potential-docs"],
            ["electric", "electric-docs"]
        ]);
    }

    public getDocHTMLTag(name: docsType): string | undefined {
        return this.docsMap.get(name);
    }

    public writeDoc(name: docsType): void {

        const docsTag = this.getDocHTMLTag(name);

        if (!this.docsContainer || !docsTag) {
            return;
        }

        const newDocsElement = document.createElement(docsTag);
        this.docsContainer.innerHTML = "";
        this.docsContainer.appendChild(newDocsElement);
        const innerContainer = newDocsElement.querySelector('div');
        renderMathInElement(innerContainer as HTMLDivElement, {
            delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
            ],
            throwOnError: true,
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
        });
    }

    public static get instance(): DocsService {
        if (!DocsService.#instance) {
            DocsService.#instance = new DocsService();
        }

        return DocsService.#instance;
    }
}