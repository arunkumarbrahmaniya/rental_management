import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Meta } = Card;
const CategoryCard = ({ _categories, _handleMenu }) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
                _categories && _categories.map((cardData) => {
                return (
                    <Col className="gutter-row" span={6}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={cardData.name} src={`./images/category/${cardData.image}`} />}
                            >
                                <div style={{float:"left"}}>
                                <Meta title={cardData.name} onClick={() => _handleMenu(cardData.subcategories)}/>
                                </div>
                                <div style={{float:"right"}}>
                                    <CaretRightOutlined />
                                </div>
                            
                            </Card>
                    </Col>
                )
            })
            }
        </Row>
    )
}
export default CategoryCard;