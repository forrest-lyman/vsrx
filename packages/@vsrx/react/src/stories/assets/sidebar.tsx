import styled from 'styled-components';

const Sidebar = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #1e1e1e;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 1px solid #333;
`;

const SidebarItem = styled.div`
    padding: 10px 0;
    cursor: pointer;
    &:hover {
        background-color: #333;
    }
`;

const SidebarFooter = styled.div`
    margin-top: auto;
    padding: 10px 0;
    border-top: 1px solid #333;
`;

export { Sidebar, SidebarHeader, SidebarItem, SidebarFooter };