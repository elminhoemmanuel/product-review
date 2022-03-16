import Header from '@/components/Common/Header';
import { render, screen } from '@testing-library/react'

test("On render, check that Header text is present", () => {
    render(<Header size="sm" text="Test Header" />);

    expect(screen.getByTestId("header"))
})
