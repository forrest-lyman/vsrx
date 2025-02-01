import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';

describe('Table Component', () => {
    it('renders table with data prop', () => {
        const data = [
            { name: 'John', age: 28 },
            { name: 'Jane', age: 32 },
        ];

        const { getByText } = render(<Table data={data} />);

        expect(getByText('name')).toBeInTheDocument();
        expect(getByText('age')).toBeInTheDocument();
        expect(getByText('John')).toBeInTheDocument();
        expect(getByText('28')).toBeInTheDocument();
        expect(getByText('Jane')).toBeInTheDocument();
        expect(getByText('32')).toBeInTheDocument();
    });

    it('renders table with children prop', () => {
        const { getByText } = render(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Header 1</TableCell>
                        <TableCell>Header 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Data 1</TableCell>
                        <TableCell>Data 2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );

        expect(getByText('Header 1')).toBeInTheDocument();
        expect(getByText('Header 2')).toBeInTheDocument();
        expect(getByText('Data 1')).toBeInTheDocument();
        expect(getByText('Data 2')).toBeInTheDocument();
    });

    it('renders empty table when no data or children are provided', () => {
        const { container } = render(<Table />);
        expect(container.firstChild).toBeNull();
    });
});
