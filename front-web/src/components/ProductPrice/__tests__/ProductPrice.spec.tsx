import { render, screen } from "@testing-library/react";
import ProductPrice from "..";


test('should render ProductPrice', () => {

    //arrange
    const price = 50.00;

    //act
    render(
        <ProductPrice price={price} />
    );
    
    //assert
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("50,00")).toBeInTheDocument();
});
