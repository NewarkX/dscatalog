import { render, screen } from "@testing-library/react";
import ButtonIcon from "..";


test('ButtonIcon should render button with given text', () => {

    //arrange
    const text = "Fazer login";

    //act
    render(
        <ButtonIcon text={text} />
    );
    
    //assert
    expect(screen.getByText(text)).toBeInTheDocument();
});