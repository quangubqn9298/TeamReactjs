import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Typography, Avatar, Row, Col, Menu, Dropdown, Button, Space, Badge } from 'antd';
import Carts from '../../page/Cart';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';


const { Title } = Typography;
function Header(props) {
    const { Cart, showDrawers, closeDrawers, editCart } = props;
    console.log("Cart", Cart);
    const title = <span>Sản Phẩm Đã Chọn</span>
    const AoNam = (
        <Router>
            <Menu>
                <Menu.Item >
                    <Link to="/AoNam/item1">
                        1st menu item
                    </Link>
                </Menu.Item >
                <Menu.Item >
                    <Link to="/AoNam/item2">
                        2nd menu item
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to="/AoNam/item3">
                        3rd menu item
                    </Link>
                </Menu.Item>
            </Menu>
            <Route path="/AoNam/item1" ></Route>
        </Router>
    );
    const QuanNam = (
        <Menu>
            <Menu.Item >
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item >
            <Menu.Item >
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item >
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );
    const PhuKien = (
        <Menu>
            <Menu.Item >
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item >
            <Menu.Item >
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item >
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Row>
                <Col span={8} className="header1"><Title level={3}>Tony4Men</Title></Col>
                <Col className="rowNav" span={10} className="header2">
                    <Space wrap>
                        <Dropdown overlay={AoNam}>
                            <Button>Áo Nam</Button>
                        </Dropdown>
                        <Dropdown overlay={QuanNam} >
                            <Button>Quần Nam</Button>
                        </Dropdown>
                        <Dropdown overlay={PhuKien} >
                            <Button>Phụ Kiện</Button>
                        </Dropdown>
                        <Button>Tin Tức</Button>
                    </Space>
                </Col>
                <Col span={6} className="header3">

                    <Badge count={Cart.sl} showZero>
                        <Avatar style={{ float: 'right' }} icon={< ShoppingCartOutlined />} onClick={showDrawers} />
                    </Badge>

                </Col>
            </Row>

            <Carts listProduct={Cart} visible={Cart.visible} onClose={closeDrawers} editCart={editCart} />
        </div >
    );
}

export default Header;