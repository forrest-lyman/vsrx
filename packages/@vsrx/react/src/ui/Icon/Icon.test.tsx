import React from 'react';
import { render } from '@testing-library/react';
import { Icon, IconProps } from './Icon';

describe('Icon component', () => {
    const renderIcon = (props: IconProps) => render(<Icon {...props} />);

    it('should render the correct icon', () => {
        const { container } = renderIcon({ iconName: 'add' });
        const iconElement = container.querySelector('.codicon.codicon-add');
        expect(iconElement).toBeInTheDocument();
    });

    it('should apply the correct size', () => {
        const size = 24;
        const { container } = renderIcon({ iconName: 'add', size });
        const iconElement = container.querySelector('.codicon.codicon-add');
        expect(iconElement).toHaveStyle(`font-size: ${size}px`);
    });

    it('should have a default size of 16px', () => {
        const { container } = renderIcon({ iconName: 'add' });
        const iconElement = container.querySelector('.codicon.codicon-add');
        expect(iconElement).toHaveStyle('font-size: 16px');
    });

    it('should be hidden from screen readers', () => {
        const { container } = renderIcon({ iconName: 'add' });
        const iconElement = container.querySelector('.codicon.codicon-add');
        expect(iconElement).toHaveAttribute('aria-hidden', 'true');
    });
});