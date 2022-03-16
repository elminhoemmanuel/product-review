import TextBox from '@/components/Common/TextBox';
import { render } from '@testing-library/react'

test("On render, check that Text box field is present", () => {
    const { container } = render(
        <TextBox name="test-textbox" />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
})
