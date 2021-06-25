  
<template>
    <div v-if="policy" v-html="policy.content.contentDetails"></div>
</template>

<script>
export default {
    props: {
        policy: { type: Object },
    },
}
</script>

<style>
.col-main {
    margin-top: 20px;
}
.page-title {
    padding: 15px 20px;
    background: #f5f5f5;
}
.page-title h1 {
    font-size: 25px;
    font-weight: 700;
    color: #003980;
}
.std {
    background: #f5f5f5;
    padding: 0 20px 30px;
    float: left;
    width: 100%;
    position: relative;
    margin-bottom: 25px;
    min-height: 750px;
}
.cms-page-cnt {
    width: 90%;
}
.std dl dd p,
.std dl p,
.std p {
    line-height: 22px;
    font-size: 14px;
}
.std dl dt:first-child {
    margin-top: 0;
}
.std dl dt {
    margin: 20px 0 5px 0;
    font-size: 17px;
    line-height: normal;
    font-weight: 600;
}
.std dl dd {
    margin-bottom: 8px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}
.std a {
    text-decoration: none;
    font-weight: 600;
    color: #001733;
}
.std ol li,
.std ul li {
    padding: 4px 0;
    margin-left: 15px;
    font-size: 14px;
    line-height: 21px;
}
.std ol,
.std ul {
    padding: 10px 20px;
    background: #fff;
    margin-bottom: 10px;
}
.std .fees-deduction-area ol,
ul {
    margin-bottom: 10px;
}
.std h3 {
    font-weight: 600;
    font-size: 15px;
}
.std dl h6 {
    font-weight: 700;
    font-size: 18px;
    margin: 0 0 24px;
    padding: 9px 0;
    border-bottom: 1px solid #ddd;
}
.std .left {
    float: left;
    width: 49%;
    background: #fff;
    padding: 15px;
    min-height: 250px;
}
.std .right {
    float: right;
    width: 49%;
    background: #fff;
    padding: 15px;
    min-height: 250px;
}
h4 {
    font-weight: 600;
    font-size: 18px;
}
h5, .h5 {
    font-weight: bold;
    text-transform: uppercase;
}
h6,
.h6 {
    text-transform: uppercase;
}
.std .table-grid {
    margin: 25px 0;
    float: left;
    width: 100%;
    border: 1px solid #dcdcdc;
}
.std .table-grid th, 
.std .table-grid td {
    border: 1px solid #e8e8e8;
    width: 33.33%;
}
.std .table-grid th {
    font-size: 14px;
    padding: 10px;
    background: #ececec;
    font-weight: 600;
}
.std .table-grid td {
    font-size: 13px;
    padding: 8px;
}
.std .table-grid .odd {
    background: #fff;
}
.std .table-grid td .yes {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/right.png?v3890a126) 0 0 no-repeat;
    text-indent: -9999px;
    display: inline-block;
    width: 16px;
    height: 12px;
}
.std .table-grid td .no {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/close.png?v39a5b6f1) 0 0 no-repeat;
    text-indent: -9999px;
    display: inline-block;
    width: 16px;
    height: 12px;
}
.std .large {
    font-size: 14px;
    font-weight: 600;
    background: #fff;
    clear: both;
    padding: 13px 10px 5px;
}
.std .large p {
    margin-bottom: 10px;
}
.std .expert-tip {
    border: 1px solid #d6d6d6;
    padding: 15px;
    margin: 20px 0;
}
.std .expert-tip .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/tips_icon.png?vd5aa2377)
        0 4px no-repeat;
    padding-left: 42px;
}
.std .expert-tip h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
}
input[type='email'],
input[type='number'],
input[type='password'],
input[type='tel'],
input[type='text'],
textarea,
select {
    height: 40px;
    padding: 0 10px;
}
.no-display {
    display: none;
}
.row {
    display: flex;
}

/* help center */
.clearfix .std {
    padding: 0;
    margin: 0;
    background: none;
}
.clearfix .hero {
    background-image: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-general/help-center-bg.png?vca6c2565);
    background-position: center;
    background-size: cover;
    height: 230px;
    margin-bottom: 45px;
    padding: 0 20px;
    text-align: center;
    width: 100%;
}
.clearfix .hero .hero-inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.clearfix .hero .main_heading {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-transform: uppercase;
    margin: 0;
}
.clearfix .hero .sub-heading {
    font-weight: 800;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 7px;
    color: #fff;
    text-transform: uppercase;
}
.clearfix .main-container .container {
    max-width: 1220px;
}
.clearfix .categories_block {
    width: 33.33%;
    float: left;
    margin: 0;
    flex-direction: column;
    padding: 10px 20px;
}
.clearfix .categories_block_inner {
    padding: 40px 30px;
    background: #f8f8f8;
}
.clearfix .std li {
    margin: 0;
}
.clearfix .std ol, 
.clearfix .std ul {
    list-style: none;
    background: none;
    padding: 0;
}
.clearfix .category-item-title {
    color: #001733;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
}
.clearfix .categories-article-list li a {
    color: #174b8b;
    font-size: 17px;
    line-height: 22px;
    font-weight: 500;
}
.clearfix .need_further_block {
    margin-top: 30px;
}
.clearfix .categories_block_content_inner {
    background: #f8f8f8;
    height: 100%;
    flex-direction: column;
}
.clearfix .help_heading {
    line-height: 33px;
    padding: 30px 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    text-align: center;
}
.clearfix .need_further_block .help_heading .contact_us {
    background: #005ccc;
    padding: 15px 50px;
    margin-left: 30px;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
}

/* return policy */
.return-policy-content .fees-deduction-area ol:first-child {
    font-size: 14px;
}
.return-policy-content .returned {
    background: #faebe7;
    padding: 12px 20px;
    margin-bottom: 10px;
}
.return-policy-content .returned ol {
    background: #faebe7;
    padding: 0;
}
.return-policy-content .expert-tip ol {
    background: none;
    padding: 0;
}
.return-policy-content .cancellation-policy .inner-title {
    font-size: 13px;
    line-height: normal;
    margin-top: 12px;
}
.cancellation-policy a {
    color: #001733 !important;
}

/* terms & conditions */
.cms-wrapper-terms-conditions dl dd {
    border-bottom: 0;
    padding-bottom: 0;
}
.cms-wrapper-terms-conditions.cms-page-cnt ol,
.cms-wrapper-terms-conditions.cms-page-cnt ul {
    padding: 0;
    background: none;
}
.cms-wrapper-terms-conditions .returned {
    background: none;
    padding: 0;
}
.cms-wrapper-terms-conditions dl .live-chat-title {
    font-weight: 700;
    font-size: 16px;
}
.cms-wrapper-terms-conditions .expert-tip h3 {
    font-size: 16px;
    font-weight: 700;
}
.cms-wrapper-terms-conditions dl dt {
    margin: 0px 0 6px 0;
    font-weight: 700;
    font-size: 16px;
}
.cms-wrapper-terms-conditions .expert-tip {
    border: 0;
    padding: 0;
    margin: 15px 0;
}
.cms-wrapper-terms-conditions .expert-tip .inner {
    padding: 0;
    background: none;
}
.cms-wrapper-terms-conditions .free-shipping-content h6 {
    border: 0;
    margin-bottom: 6px;
    padding: 0;
    font-size: 16px;
    font-weight: 700;
}
.cms-wrapper-terms-conditions .free-shipping-content dl dd p {
    margin: 0 0 5px 0;
    font-size: 15px;
}
.cms-wrapper-terms-conditions .free-shipping-content dl dd {
    margin: 0;
    padding: 0px;
}
.cms-wrapper-terms-conditions .free-shipping-content .input-box p {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
}
.cms-wrapper-terms-conditions .free-shipping-content .input-box .input-box-text {
    border: 1px solid #d0d0d0;
    width: 300px;
    vertical-align: middle;
}
.cms-wrapper-terms-conditions .free-shipping-content .input-box button {
    background: #989898;
    border-color: #7d7d7d;
}
.cms-wrapper-terms-conditions .free-shipping-content .input-box .button {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 7px 35px;
    margin-left: 10px;
    border-radius: 3px;
}

/* covid 19 */
.covid-page-content .covoid-popup-home-inner {
    padding-top: 20px;
} 
.covid-page-content .covoid-popup-home .content {
    padding: 10px;
    background: #fff;
}
.covid-page-content .covoid-popup-home .content h4 {
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #F25D0D;
    padding: 10px 0;
    font-size: 20px;
}
.covid-page-content .covoid-popup-home .content ul li {
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    list-style: none;
}
.covid-page-content .covoid-popup-home .content ul li img {
    height: 90px;
    display: flex;
    margin: 10px auto;
}
.covid-page-content .covoid-popup-home .content ul li h5 {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #0E259A;
    padding: 5px 35px;
    text-transform: inherit;
}
.covid-page-content .covoid-popup-home .content p {
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #F25D0D;
}
.covid-page-content h1 {
    font-weight: 700;
    font-size: 25px;
    color: #003980;
    padding: 18px 0;
    line-height: normal;
}
.covid-page-content h2 {
    color: #001733;
    font-size: 17px;
    font-weight: 600;
    margin: 0;
    padding: 0 0 17px;
    line-height: normal;
}
.covid-page-content ul {
    background: none;
    padding: 0;
}
.covid-page-content ul li {
    list-style: none;
    font-size: 16px;
    color: #001733;
    line-height: 24px;
    margin: 0 0 13px 0;
    font-weight: 400;
    padding: 0;
}
.covid-page-content p {
    font-size: 16px;
}

/* shipping Information */
.shipping-delivery-content a {
    color: #001733 !important;
}
.shipping-delivery-content .small-box,
.shipping-delivery-content .large-box {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
}
.shipping-delivery-content .small-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/small_icon.png?v9c4b1bac) 0 4px no-repeat;
    padding-left: 60px;
}
.shipping-delivery-content .large-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/large_icon.png?v8d61079a) 0 4px no-repeat;
    padding-left: 80px;
}
.shipping-delivery-content .small-box h3,
.shipping-delivery-content .large-box h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 6px 0;
}
.shipping-delivery-content .small-box .inner .line,
.shipping-delivery-content .large-box p {
    margin: 0;
}
.shipping-delivery-content .full-refund-decimal {
    background: none;
    padding: 0;
}
.shipping-delivery-content .process-link {
    margin: 10px 0 30px;
}
.shipping-delivery-content .process-link a {
    font-size: 16px;
    color: #005ccc !important;
    text-decoration: underline;
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/infographic_icon.png?vd6a92aa6) 0 2px no-repeat;
    position: relative;
    padding: 10px 15px 5px 40px;
}
.shipping-delivery-content .process-link a:before {
    position: absolute;
    bottom: 3px;
    right: 0;
    content: "";
    width: 7px;
    height: 15px;
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/infographic_arrow.png?v521fb1dc) 0 0 no-repeat;
}

/* delivery option */
.col1-layout div.col-main {
    padding: 0;
    margin: 0;
}
.free-white-main .sp-cnt {
    float: left;
    width: 100%;
}
.free-white-main .sp-main-cnt {
    width: 100%;
    float: left;
    margin-bottom: 20px;
}
.free-white-main .sp-main-cnt .sp-cnt-lft {
    float: left;
    width: 59%;
    margin-right: 1%;
    padding: 0;
    margin-top: 12px;
    background: #f8f9fb;
}
.free-white-main .left-half {
    width: 50%;
    float: left;
    padding-right: 0;
    position: relative;
}
.free-white-main h1 {
    font-weight: 700;
    font-size: 16px;
    background: #454545;
    color: #fff;
    line-height: 18px;
    padding: 10px;
    text-align: center;
    min-height: 57px;
}
.free-white-main .left-half .top-title {
    position: relative;
    padding-top: 20px;
}
.free-white-main .sp-main-cnt .sp-cnt-lft .left-half h3 {
    text-align: center;
    background: #e7eaed;
    line-height: 30px;
}
.free-white-main .sp-main-cnt .sp-cnt-lft ul {
    padding: 15px 9px;
    background: none;
}
.free-white-main .sp-main-cnt .sp-cnt-lft ul li {
    font-size: 15px;
    color: #222;
    font-weight: 600;
    list-style: none;
    margin: 0 0 6px;
    padding: 0 0 6px 15px;
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/dot_img.png?vfe367883) 0 8px no-repeat;
}
.free-white-main .left-half .top-title:after {
    position: absolute;
    top: 50%;
    z-index: 9;
    right: -22.5px;
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/vs_icon_v3.png?v77bd980f) 0 0 no-repeat;
    width: 45px;
    height: 45px;
    content: "";
    margin-top: -22px;
}
.free-white-main .left-half:last-child {
    width: 50%;
    float: right;
    background: #e5e6e8;
    min-height: 425px;
}
.free-white-main .sp-main-cnt .sp-cnt-lft ul li label {
    font-size: 14px;
    line-height: normal;
    padding-top: 2px;
    color: #001733;
    font-weight: 500;
}
.free-white-main .sp-cnt .sp-main-cnt .sp-cnt-lft p {
    margin: 0;
    padding: 0 15px;
    line-height: normal;
    font-size: 14px;
    font-weight: 400;
}
.free-white-main .sp-main-cnt .sp-cnt-rgt {
    float: left;
    width: 40%;
    text-align: center;
}
.free-white-main .sp-cnt-rgt h4.main-ttl {
    text-align: center;
    margin: 0;
    font-size: 16px;
    color: #003980;
}
.free-white-main .sp-cnt-rgt h4 {
    font-size: 14px;
    margin: 0 0 10px 0;
}
.free-white-main .sp-cnt-rgt h4 span {
    color: #f26122;
}
.free-white-main .grey-bg-btm {
    background: #f7f9fb;
    border: 1px solid #e8f1f9;
    width: 100%;
    float: left;
    padding: 20px;
}
.free-white-main .grey-bg-btm .main-tbl td {
    padding: 0 0 0 12px;
}
.free-white-main .grey-bg-btm .main-tbl .standard-delivery {
    display: block;
    border-bottom: 1px solid #c8d2db;
    padding-bottom: 12px;
}
.free-white-main .grey-bg-btm .main-tbl .platinum-text {
    display: block;
    padding-top: 12px;
}
.free-white-main .grey-bg-btm .main-tbl .top-lft-tbl.top {
    font-weight: bold;
    font-size: 22px;
    color: #454545;
    background: #d7d7d7;
    width: 100%;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    line-height: 24px;
}
.free-white-main .grey-bg-btm .main-tbl .top-rgt-tbl {
    font-weight: bold;
    font-size: 22px;
    background: #003980;
    color: #fff;
    padding-top: 20px;
    text-align: center;
    text-transform: uppercase;
    line-height: 24px;
    padding: 0 50px;
}
.free-white-main .grey-bg-btm .main-tbl .top-rgt-tbl .break {
    font-weight: bold;
    font-size: 22px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    padding: 0;
    margin: 0;
}
.free-white-main .grey-bg-btm .main-tbl .top-rgt-tbl span {
    display: block;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 18px;
    margin-top: 3px;
    line-height: normal;
}
.free-white-main .grey-bg-btm .main-tbl .top-lft-tbl.top:before {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/vs_icon_v3.png?v87e39d59) 0 0 no-repeat;
    width: 52px;
    height: 52px;
    position: absolute;
    bottom: -38px;
    left: 50%;
    content: "";
    margin-left: -26px;
}

/* free shipping */
.free-shipping-content {
    width: 80%;
}
.free-shipping-content dl dd p {
    font-size: 16px;
}
.free-shipping-content dl dd {
    border: none;
    padding: 0;
    font-size: 14px;
}
.free-shipping-content .free-white-glove-ttl {
    color: #000;
    font-weight: 600;
    font-size: 16px !important;
}
.free-shipping-content .free-delivery-ttl label .red,
.free-shipping-content .free-white-glove-ttl label .red {
    background: none !important;
}
.free-shipping-content .input-box {
    margin: 18px 0 20px 0;
    background: #fff;
    padding: 0 18px 25px;
    border-radius: 5px;
}
.free-shipping-content .input-box p {
    font-weight: 600;
    font-size: 15px;
    margin: 0 -18px 18px -18px;
    background: #e7e7e8;
    padding: 11px 18px;
    color: #3d4971;
    border-radius: 5px 5px 0 0;
}
.free-shipping-content .input-box .input-box-text {
    border: 1px solid #d0d0d0;
    width: 300px;
    vertical-align: middle;
}
.free-shipping-content .input-box .button {
    background: #ff4800;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 7px 35px;
    margin-left: 5px;
    border-color: #c23700;
    border-radius: 3px;
}

/* international shipping, order help */
.shipping-delivery-content  dl dd,
.order-help-content  dl dd {
    border: none;
    padding: 0;
}
.order-help-content.cms-page-cnt ol li a.link {
    color: #005ccc;
}

/* payment methods */
.billing-payment.cms-page-cnt .title {
    margin-bottom: 20px;
}
.billing-payment.cms-page-cnt .credit-cart-box,
.billing-payment.cms-page-cnt .affirm-cart-box,
.billing-payment.cms-page-cnt .wire-cart-box {
    margin-bottom: 20px;
    padding: 12px;
    background: #fff;
}
.billing-payment.cms-page-cnt .paypal-cart-box,
.billing-payment.cms-page-cnt .personal-cart-box,
.billing-payment.cms-page-cnt .store-cart-box {
    margin-bottom: 20px;
    padding: 12px;
}
.billing-payment.cms-page-cnt .credit-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/credit_card_logo.png?v8b9b9a68) 0 5px no-repeat;
}
.billing-payment.cms-page-cnt .paypal-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/paypal.png?v879c8565) 0 50% no-repeat;
}
.billing-payment.cms-page-cnt .affirm-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/affirm.png?v9850ea6f) 0 50% no-repeat;
}
.billing-payment.cms-page-cnt .personal-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/money.png?v5e386229) 5px 5px no-repeat;
}
.billing-payment.cms-page-cnt .wire-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/transfer.png?v705d9119) 10px 5px no-repeat;
}
.billing-payment.cms-page-cnt .store-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/store_card.png?va5898867) 20px 5px no-repeat;
}
.billing-payment.cms-page-cnt .credit-cart-box .inner,
.billing-payment.cms-page-cnt .paypal-cart-box .inner,
.billing-payment.cms-page-cnt .affirm-cart-box .inner,
.billing-payment.cms-page-cnt .personal-cart-box .inner,
.billing-payment.cms-page-cnt .wire-cart-box .inner,
.billing-payment.cms-page-cnt .store-cart-box .inner {
    padding-left: 80px;
}
.billing-payment.cms-page-cnt .credit-cart-box p,
.billing-payment.cms-page-cnt .paypal-cart-box p,
.billing-payment.cms-page-cnt .affirm-cart-box p,
.billing-payment.cms-page-cnt .personal-cart-box p,
.billing-payment.cms-page-cnt .wire-cart-box p,
.billing-payment.cms-page-cnt .store-cart-box p {
    margin: 2px 0 0;
    padding: 0;
}
.billing-payment.cms-page-cnt .title.last {
    font-size: 19px;
    font-weight: 600;
    padding-top: 22px;
    border-top: 1px solid #ddd;
}
.billing-payment.cms-page-cnt .call-cart-box,
.billing-payment.cms-page-cnt .order-online-cart-box,
.billing-payment.cms-page-cnt .mail-cart-box {
    margin-bottom: 20px;
}
.billing-payment.cms-page-cnt .call-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/call.png?v5200efd4) 28px 5px no-repeat;
}
.billing-payment.cms-page-cnt .order-online-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/online_order.png?vfeb5e805) 18px 6px no-repeat;
}
.billing-payment.cms-page-cnt .mail-cart-box .inner {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/billing/mail.png?v4a141fee) 21px 6px no-repeat;
}
.billing-payment.cms-page-cnt .call-cart-box .inner,
.billing-payment.cms-page-cnt .order-online-cart-box .inner,
.billing-payment.cms-page-cnt .mail-cart-box .inner {
    padding-left: 80px;
}
.billing-payment.cms-page-cnt .call-cart-box p,
.billing-payment.cms-page-cnt .order-online-cart-box p, 
.billing-payment.cms-page-cnt .mail-cart-box p {
    margin: 2px 0 0 0;
    padding: 0;
}

/* price match guarantee */
.price-match-guarantee .price-match-guarantee-top {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 14px 15px;
    border: 1px solid #d6d7d7;
}
.price-match-guarantee .image {
    float: right;
}
.price-match-guarantee .image img {
    width: 170px;
}
.price-match-guarantee .content p.title-text {
    font-size: 28px;
    padding-bottom: 5px;
    line-height: 32px;
    font-weight: 700;
    margin: 6px 0 0;
}
.price-match-guarantee .content p.title-text strong {
    font-weight: 700;
}
.price-match-guarantee .content p.title-text span {
    display: block;
    font-size: 18px;
    font-weight: 600;
}
.price-match-guarantee .content p.bold-text {
    font-size: 15px;
}
.price-match-guarantee .content p.bold-text label {
    font-size: 14px;
    color: #003980;
    font-weight: 600;
}
.price-match-guarantee ul {
    margin-left: 20px;
    background: none;
    padding: 0;
}
.price-match-guarantee ul li {
    margin: 0 0 3px 0;
    padding: 0 0 3px 0;
    font-size: 14px;
    color: #001733;
    line-height: normal;
    position: relative;
}
.price-match-guarantee .call-us-cnt {
    font-weight: 600;
    margin: 0 0 15px 0;
}
.price-match-guarantee .call-us-cnt label, .price-match-guarantee .content label {
    color: #003980;
    font-weight: 600;
}
.pricing-content.cms-page-cnt .price-changes {
    margin: 25px 0;
    padding: 12px 0 0;
    border-top: 1px solid #ddd;
}
.pricing-content.cms-page-cnt .price-changes h3 {
    font-size: 24px;
    padding: 0 0 8px 0;
    font-weight: 700;
    color: #003980;
}

/* brands */
.brand-title {
    font-size: 24px;
    margin: 0 0 25px;
    color: #0b0b0b;
    font-weight: 400;
    background-color: white !important;
}
.brandsPage-filter {
    float: left;
    padding-right: 30px;
    position: sticky;
    top: 70px;
    width: 21%;
}
.brandsPage-search {
    height: 37px;
    margin-bottom: 10px;
    position: relative;
    width: 100%;
}
.brandsPage-search-input {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-svg-icons/1sb-search.svg?v799fc79b) no-repeat left 12px center / 13px 13px;
    border: solid 1px #aaa;
    color: #777;
    font-size: 14px !important;
    height: 100%;
    padding: 0 35px;
    width: 100%;
}
.brandsPage-filter-chars {
    flex-wrap: wrap;
    font-size: 20px;
    line-height: 2.1;
    color: #e4e4e4;
    display: flex;
    text-align: center;
    text-transform: capitalize;
}
.brandsPage-filter-char.available {
    color: #010101;
    cursor: pointer;
}
.brandsPage-filter-char {
    width: 20%;
}
.brandsPage-list {
    margin-left: 21%;
}
.brandsPage-list-char {
    border-bottom: solid 1px #ebebeb;
    color: #565656;
    font-size: 28px;
    margin-bottom: 20px;
}
.brandsPage-list-section {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr 1fr;
}
.brandsPage-list-item {
    background-origin: content-box;
    background-color: #f5f5f5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 2px solid transparent;
    font-size: 0;
    height: 165px;
    padding: 20px;
}
.brandsPage-emptyMessage {
    color: #000;
    background: #f8f8f8;
    padding: 25px;
}
.brandsPage-emptyMessage-text {
    font-weight: bold;
    font-size: 20px;
}
.brandsPage-emptyMessage-extra {
    margin-top: 5px;
    font-size: 17px;
}
</style>