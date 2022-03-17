import PriBtn from '@/components/Common/PriBtn';
import { render, screen } from '@testing-library/react'

test("On render, check that Primary button is rendered correctly", () => {
    const { container } = render(
        <PriBtn>Test Button</PriBtn>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
})
