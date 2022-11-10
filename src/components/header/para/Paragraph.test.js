import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph';

test('initial default icon', ()=>{
    render(<Paragraph />)
    const initParagr = screen.getByTestId('initpara');
    expect(initParagr).toBeInTheDocument();
});