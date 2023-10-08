export interface LinkItem {
    label: string;
    href: string;
}

export interface DropdownProps {
    title: string;
    links: LinkItem[];
}