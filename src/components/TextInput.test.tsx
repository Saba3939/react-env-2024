import userEvent from "@testing-library/user-event";
import TextInput from "./Textinput";
import {render,screen} from "@testing-library/react";
test("TextInput Component Test", async ()=> {
    const user = userEvent.setup();
    render(<TextInput />);

    const textElemet = screen.getByText("Entered Text:");
    expect(textElemet).toBeInTheDocument();

    const inputElement = screen.getByLabelText("Text input");
    await user.type(inputElement,"Hello World");
    expect(screen.getByText("Entered Text: Hello World")).toBeInTheDocument();

});