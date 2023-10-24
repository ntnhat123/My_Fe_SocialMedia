
export interface InputProps {
    // type inout props
    type: "text" | "password" | "number" | "email" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "image" | "range" | "hidden" | "button" | "submit" | "reset" | "checkbox" | "radio" | "select" | "textarea" | "select-multiple" | "select-one" | "text" | "password" | "number" | "email" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "image" | "range" | "hidden" | "button" | "submit" | "reset" | "checkbox" | "radio" | "select" | "textarea" | "select-multiple" | "select-one" | "text" | "password" | "number" | "email" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "image" | "range" | "hidden" | "button" | "submit" | "reset" | "checkbox" | "radio" | "select" | "textarea" | "select-multiple" | "select-one" | "text" | "password" | "number" | "email" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "image" | "range" | "hidden" | "button" | "submit" | "reset" | "checkbox" | "radio" | "select" | "textarea" | "select-multiple" | "select-one";
    onBlurProps?: (value: string) => void;
    onChange?: (value: any) => void;
    isSubmit?: boolean;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    isShowTextError?: boolean;
    isValidate?: boolean;
    className?: string;
    textError?: string;
    isRequired?: boolean;
    isShowIcon?: boolean;
}
