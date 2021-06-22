import React from 'react';
import { Avatar, List, Skeleton, Drawer, InputNumber } from 'antd';
function Cart(props) {
    const { listProduct, visible, onClose, editCart } = props;
    console.log(listProduct)
    return (
        <div>
            <Drawer
                title="Cart"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={720}
            >
                <List
                    dataSource={listProduct.Cart}
                    renderItem={item => (
                        <List.Item
                            actions={[<InputNumber min={0} value={item.sl} max={100000} onChange={(value) => {
                                editCart(item, (value - item.sl))
                            }} />]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a>{item.name}</a>}
                                    description={<div>Giá: {item.price}  X  {item.sl}</div>
                                    }
                                >
                                </List.Item.Meta>
                            </Skeleton>
                        </List.Item>

                    )}
                >

                </List>
                <div style={{ float: "right" }}>Total : {listProduct.total}</div>
            </Drawer>

        </div>

    );
}

export default Cart;