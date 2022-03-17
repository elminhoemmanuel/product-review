import Input from '@/components/Common/Input';
import { render, screen } from '@testing-library/react'

test("On render, check that Input field is present", () => {
    const { container } = render(
        <Input type="text" />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
})
