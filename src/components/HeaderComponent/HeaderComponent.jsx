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
    WrappedA,
    RightSidea,
    LeftSidea,
    RightSide,
    Navbar,
    LeftSideHome
} from './style';

// import { Input } from 'antd';

import {
    HeartOutlined,
    UserOutlined,
} from '@ant-design/icons';

// const { Search } = Input;
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
    const menuItems = [
        {
            key: '1',
            label: (
                <a target="" rel="noopener noreferrer" href="/signup">
                    Đăng Nhập
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="" rel="noopener noreferrer" href="/signin">
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
                    <WrappedA href="tel:0349826133" title="0349826133">034 982 6133</WrappedA>
                    <span className="span-or"> hoặc </span>
                    <WrappedA href="mailto:info@BlissfulPets.vn" title="info@lildanpet.vn">info@BlissfulPets.vn</WrappedA>
                </WrappedHeaderText>
                <WrappedHeader justify="center">

                    <span span={6}>
                        <WrappedLogo href="/">Blissful Pets</WrappedLogo>

                    </span>
                    <Col span={12}>
                        <ButtonInputSearch
                            size="large"
                            placeholder="Tìm dịch vụ..."
                            textbutton=" "

                        />
                    </Col>
                    <WrappedJustified span={6} >
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
                
                    <Navbar>
                        <div className="left-side">
                            {/* Nội dung bên trái */}
                            <LeftSideHome href="/">Nhà BLISSFUL</LeftSideHome>
                            <LeftSidea href="/introduct">Giới thiệu</LeftSidea>
                            <LeftSidea href="/services">Dịch vụ</LeftSidea>
                            <LeftSidea href="/news">Tin tức</LeftSidea>
                            <LeftSidea href="/contact">Liên hệ</LeftSidea>
                        </div>
                        <RightSide >
                            {/* Nội dung bên phải */}
                            <RightSidea href="/order">Đặt hẹn</RightSidea>
                        </RightSide>
                    </Navbar>
                
            </Wrapped>
        </div>
    );
};

export default HeaderComponent;
