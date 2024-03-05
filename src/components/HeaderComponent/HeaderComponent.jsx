import React from 'react';
import { Col, Dropdown, Menu } from 'antd';
import {
    WrappedHeader,
    WrappedLogo,
    WrappedIcon,
    WrappedFlex,
    Wrapped,
    WrappedJustified,
    WrappedHeaderText,
    WrappedNav
} from './style';

import { Input } from 'antd';

import {
    HeartOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Search } = Input;

const HeaderComponent = () => {
    const menuItems = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/signup">
                    Đăng Nhập
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/signin">
                    Đăng Ký
                </a>
            ),
        },
    ];

    const menu = (
        <Menu>
            {menuItems.map(item => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div>
            <Wrapped>
                <WrappedHeaderText span={24}>
                    <span>Blissful Pets xin chào, gọi ngay: </span>
                    <a href="tel:0123456789" title="0123456789">012 345 6789</a>
                    <span className="span-or"> hoặc </span>
                    <a href="mailto:info@BlissfulPets.vn" title="info@lildanpet.vn">info@BlissfulPets.vn</a>
                </WrappedHeaderText>
                <WrappedHeader justify="center">
                    <WrappedLogo span={6}>Blissful Pets</WrappedLogo>
                    <Col span={12}>
                        <Search placeholder="Tìm dịch vụ..."
                            enterButton />
                    </Col>
                    <WrappedJustified span={6} offset={6}>
                        <WrappedFlex>
                            <WrappedIcon>
                                <HeartOutlined />
                            </WrappedIcon>
                            <WrappedIcon>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <UserOutlined />
                                </Dropdown>
                            </WrappedIcon>
                        </WrappedFlex>
                    </WrappedJustified>
                </WrappedHeader>
                <WrappedNav>
                    
                </WrappedNav>
            </Wrapped>
        </div>
    );
};

export default HeaderComponent;
