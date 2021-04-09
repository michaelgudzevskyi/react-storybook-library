import { cleanup, render } from '@testing-library/react';

import Button from './Button';

afterEach(cleanup);

it('Should render', () => {
    const component = render(<Button />);
    expect(component).toBeTruthy();
});
