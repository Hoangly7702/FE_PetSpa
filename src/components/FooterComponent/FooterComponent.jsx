import React from 'react'

import {
    WrappedFooter, WrappedFooterRow,
} from './style';
import { Col } from 'antd';

const FooterComponent = () => {

    return (
        <WrappedFooter >
            <WrappedFooterRow id='container'>
                <Col span={6}>
                    <a href="/">BlissFull Pets</a>
                    <p>Nếu Chủ có bất kỳ câu hỏi nào, vui lòng liên hệ LILDAN nhé info@lildanpet.vn</p>
                    <p>Hotline: 0349826133</p>
                    <p>Địa chỉ: 2, Nguyễn Cư Trinh, An Nghiệp, Ninh Kiều, Cần Thơ</p>
                </Col>
        
                <Col span={6}>
                    <h4>Hỗ trợ khách hàng</h4>
                    <p>Quy hạn đổi trả,..</p>
                </Col>
                <Col span={6}>
                    <h4>Phương thức thanh toán</h4>
                    Momo
                    Payal
                    Vietcombank
                    Techcombank
                </Col>
                <Col span={6}>
                    <h4>Kết nối với chúng tôi</h4>
                    Instagram
                    Facebook
                    Gmail
                    
                </Col>
            </WrappedFooterRow>

        </WrappedFooter>
    )
}

export default FooterComponent