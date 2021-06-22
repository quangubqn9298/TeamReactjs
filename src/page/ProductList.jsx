import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Layout, Breadcrumb, Space, Pagination, } from 'antd';
const { Content } = Layout;
const { Meta } = Card;


ProductList.propTypes = {
    productList: PropTypes.array,
};
ProductList.defaultProps = {
    productList: [],
}
function ProductList(props) {
    const { productList, Products, changePageAction, editCart } = props;
    console.log("Product List", productList);
    var a = [...productList]
    var newList = a.splice((Products._currentPage * Products._limit - Products._limit), Products._limit);
    //console.log('Products: ', newList);
    const onchange = (page, pageSize) => {
        //console.log("Page: ", page, " PageSize: ", pageSize);
        changePageAction(page, pageSize);

    }
    const editToCart = (e) => {
        console.log(e.target.id)
        const id = e.target.id.split("-");
        const product = productList.find((item) => {
            return item.id == id[1];
        })
        console.log("Product cart: ", product);
        if (id[0] == 'add') {
            editCart(product, 1);
        }
        if (id[0] == 'del') {
            editCart(product, -1);
        }
    }

    return (
        < Layout className="layout" >

            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Product</Breadcrumb.Item>
                </Breadcrumb>
                <Space direction="horizontal" className="space-align-container" wrap>
                    {
                        newList.map((product) => {
                            return (
                                <Col span={6} style={{ marginBottom: '10px' }} key={product.id}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >

                                        <Meta title={product.name} description={product.Description} />

                                        <Meta title={"Giá:" + product.price + "VNĐ"} description={product.price} />
                                        <a id={`add-${product.id}`} onClick={editToCart}>Thêm </a>
                                        <a id={`del-${product.id}`} onClick={editToCart}>Xóa</a>

                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Space>
                <Pagination
                    showSizeChanger={true}
                    defaultCurrent={Products._currentPage}
                    total={Products._total}
                    defaultPageSize={Products._limit}
                    pageSizeOptions={[2, 4, 6, 8]}
                    onChange={onchange}
                />

            </Content>
        </Layout >
    );
}

export default ProductList;
