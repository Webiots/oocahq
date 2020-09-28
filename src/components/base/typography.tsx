import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './typography.scss'
import { useTranslation } from "react-i18next";
import ThaiLang from './typography/thai'
const Typography = () => {
    const { i18n, t } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage('th');

    },[i18n]);
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="typography common-space">
                            <h2 className="common-header">Typography</h2>
                            <Row>
                                <Col md="6">
                                    <div className="language">
                                        <h6 className="label-dark">English language</h6>
                                        <div className="use-fonts bold">
                                            <h2>Gothamrounded</h2>
                                            <h1>Aa</h1>
                                            <h4>Bold</h4>
                                            <h4>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h4>
                                            <h4>abcdefghijklmnopqrstuvwxyz</h4>
                                            <h4>1234567890!@#$%^&*()_+.,</h4>
                                        </div>
                                        <div className="use-fonts medium">
                                            <h1>Aa</h1>
                                            <h4>Medium</h4>
                                            <h4>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h4>
                                            <h4>abcdefghijklmnopqrstuvwxyz</h4>
                                            <h4>1234567890!@#$%^&*()_+.,</h4>
                                        </div>
                                        <div className="use-fonts light"></div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="language">
                                        <h6 className="label-dark">Thai language</h6>
                                        <ThaiLang />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="typography-title common-space">
                            <Row>
                                <Col sm="6">
                                    <div className="use-fonts">
                                        <h1>Header 1</h1>
                                        <p>Page titles for web</p>
                                        <p className="caption">50px Bold H 56</p>
                                    </div>
                                    <div className="use-fonts bold">
                                        <h2>Header 2</h2>
                                        <p>Topic title 2, Modal Title</p>
                                        <p className="caption">28px Medium H 40</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h3>Header 3</h3>
                                        <p>Topic title 3, Provider name on card</p>
                                        <p className="caption">20px Medium H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h4>Header 4</h4>
                                        <p>Paragraphs, Buttons</p>
                                        <p className="caption">16px Medium H 16</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h5>Header 5</h5>
                                        <p>Form Label, Menu</p>
                                        <p className="caption">14px Medium H 16</p>
                                    </div>
                                    <div className="use-fonts">
                                        <p>Paragraphs</p>
                                        <p className="caption">16px Book H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <p>Description, Input Text</p>
                                        <p className="caption">14px Book H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <p>Caption,tag,text,Error Message,Warning Message</p>
                                        <p className="caption">12px Book H 16</p>
                                    </div>
                                    <div className="use-fonts">
                                        <small>Small Text</small>
                                        <small>Caption</small>
                                        <small className="caption">10px Book H 12</small>
                                    </div>
                                </Col>
                                <Col sm="6" className="thai-fonts thai-size">
                                    <div className="use-fonts">
                                        <h1>{t("Header1")}</h1>
                                        <p>Page titles for web</p>
                                        <p className="caption">41px Medium H 56</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h2>{t("Header2")}</h2>
                                        <p>Topic title 2, Modal Title</p>
                                        <p className="caption">24px Medium H 40</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h3>{t("Header3")}</h3>
                                        <p>Topic title 3, Provider name on card</p>
                                        <p className="caption">17px Medium H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h4>{t("Header4")}</h4>
                                        <p>Paragraphs, Buttons</p>
                                        <p className="caption">14px Medium H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <h5>{t("Header5")}</h5>
                                        <p>Form Label, Menu</p>
                                        <p className="caption">12px Medium H 24</p>
                                    </div>
                                    <div className="use-fonts paragraph">
                                        <p>Paragraphs</p>
                                        <p className="caption">14px Light H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <p>Description, Input Text</p>
                                        <p className="caption">14px Light H 24</p>
                                    </div>
                                    <div className="use-fonts">
                                        <p>Caption,tag,text,Error Message,Warning Message</p>
                                        <p className="caption">10px Light H 16</p>
                                    </div>
                                    <div className="use-fonts small-caption">
                                        <small>{t("Small")}</small>
                                        <small>Caption</small>
                                        <small className="caption">8px Light H 12</small>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="p-0">
                <div className="typography-title common-space default-primary">
                    <Container>
                        <Row>
                            <Col sm="6" className="col-6">
                                <div className="header-title">
                                    <h1>Header 1</h1>
                                    <h2>Header 2</h2>
                                    <h3>Header 3</h3>
                                    <h4>Header 4</h4>
                                    <h5>Header 5</h5>
                                    <p>Body</p>
                                    <p>Body</p>
                                    <p className="caption">Body</p>
                                    <small>Small text</small>
                                </div>
                            </Col>
                            <Col sm="6" className="thai-fonts col-6">
                                <div className="header-title">
                                    <h1>{t("Header1")}</h1>
                                    <h2>{t("Header2")}</h2>
                                    <h3>{t("Header3")}</h3>
                                    <h4>{t("Header4")}</h4>
                                    <h5>{t("Header5")}</h5>
                                    <p>Body</p>
                                    <p>Body</p>
                                    <p className="caption">Body</p>
                                    <small>{t("Small")}</small>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container fluid={true} className="p-0">
                <div className="typography-title common-space bg-black">
                    <Container>
                        <Row>
                            <Col sm="6" className="col-6">
                                <div className="header-title">
                                    <h1>Header 1</h1>
                                    <h2>Header 2</h2>
                                    <h3>Header 3</h3>
                                    <h4>Header 4</h4>
                                    <h5>Header 5</h5>
                                    <p>Body</p>
                                    <p>Body</p>
                                    <p className="caption">Body</p>
                                    <small>Small text</small>
                                </div>
                            </Col>
                            <Col sm="6" className="thai-fonts col-6">
                                <div className="header-title">
                                    <h1>{t("Header1")}</h1>
                                    <h2>{t("Header2")}</h2>
                                    <h3>{t("Header3")}</h3>
                                    <h4>{t("Header4")}</h4>
                                    <h5>{t("Header5")}</h5>
                                    <p>Body</p>
                                    <p>Body</p>
                                    <p className="caption">Body</p>
                                    <small>ข้อความขนาดเล็ก</small>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default Typography;
