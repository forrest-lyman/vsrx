import React from 'react';
import styled from 'styled-components';

const border = '1px solid #333';

const StyledTableContainer = styled.div`
    border: ${border};
    border-radius: 4px;
    overflow: hidden;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: var(--vscode-font-family);
    font-size: var(--vscode-font-size);
    color: var(--vscode-foreground);
`;

const StyledTableRow = styled.tr`
    &:nth-child(even) {
        background-color: var(--vscode-sideBarSectionHeader-background);
    }
    border: ${border};
`;

const StyledTableHead = styled.thead`
    background-color: var(--vscode-sideBar-background);
    font-weight: bold;
`;

const StyledTableBody = styled.tbody``;

const StyledTableCell = styled.td`
    border: ${border};
    padding: 8px;
`;


interface TableProps {
    data?: Record<string, any>[];
    children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ data, children }) => {
    if (data && data.length > 0) {
    const headers = Object.keys(data[0]);

    return (
        <StyledTable>
            <StyledTableHead>
                <StyledTableRow>
                    {headers.map((header) => (
                        <StyledTableCell key={header}>{header}</StyledTableCell>
                    ))}
                </StyledTableRow>
            </StyledTableHead>
            <StyledTableBody>
                {data.map((row, rowIndex) => (
                    <StyledTableRow key={rowIndex}>
                        {headers.map((header) => (
                            <StyledTableCell key={header}>{row[header]}</StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </StyledTableBody>
        </StyledTable>
    );
    } else if (children) {
        return <StyledTable>{children}</StyledTable>;
    } else {
        return null;
    }
};

export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableHead>{children}</StyledTableHead>;
};

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableBody>{children}</StyledTableBody>;
};

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableRow>{children}</StyledTableRow>;
};

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableCell>{children}</StyledTableCell>;
};