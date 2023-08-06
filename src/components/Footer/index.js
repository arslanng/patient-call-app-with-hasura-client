import React from 'react'
import { Row, Col } from "antd";
import logo1 from "../../images/logo.png"
import logo2 from "../../images/logo-2.png"
import logoRaven from "../../images/raven.png"
import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.container}>
        <Row>
            <Col span={3} className={styles.logo1}><img src={logo1} alt="logo1" width="100" /></Col>
            <Col span={18} className={styles.logoRaven}><img src={logoRaven} alt="logo1" width="40" /><span className={styles.logoName}>Bu uygulama Dr. Murat Gökduman tarafından kodlanmıştır.</span></Col>
            <Col span={3} className={styles.logo2}><img src={logo2} alt="logo2" width="150" /></Col>
        </Row>
    </div>
  )
}

export default Footer