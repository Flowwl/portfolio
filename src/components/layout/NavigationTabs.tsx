import { Tab } from '@headlessui/react';
import React, { FC } from 'react';

interface NavigationTabsProps {
    className?: string;
}

const NavigationTabs: FC<NavigationTabsProps> = (props) => {
    const { className } = props;

    return (
        <Tab.Group>
            <Tab.List>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
};

export default NavigationTabs;
