// src/types/katex-auto-render.d.ts
declare module 'katex/dist/contrib/auto-render' {
    import { KatexOptions } from 'katex';

    interface Delimiter {
        left: string;
        right: string;
        display: boolean;
    }

    interface RenderMathInElementOptions extends KatexOptions {
        // Auto-render specific options
        delimiters?: Delimiter[];
        ignoredTags?: string[];
        ignoredClasses?: string[];
        errorCallback?: (msg: string, err: Error) => void;
        preProcess?: (math: string) => string;
    }

    function renderMathInElement(
        elem: HTMLElement,
        options?: RenderMathInElementOptions
    ): void;

    export default renderMathInElement;
}