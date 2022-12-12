import React, { useState } from "react";
import { connect } from "react-redux";
import * as Types from "commons/Types";
import { LeftMenu } from "commons/Enum";
import {
    TopPageIcon,
    MakeItemsIcon,
    ItemListIcon,
    OrderIcon,
    ApproveIcon,
    OrderListIcon,
    TeamIcon,
} from "../Icons";
import "./Navigation.css";
import Translator from "commons/Translator";
import Nav from "react-bootstrap/Nav";
const NavigationCP = (props: NavigationProps) => {
    const { handleLeftMenuSelect } = props;
    const [tabSelected, setTabSelected] = useState(0);

    /**
     * "If the width of the element with the id 'content-main' is less than or equal to 767, add the
     * class 'hidden-tab' to the element with the id 'content-main__left-bar'."</code>
     * @param {any} tabSelect - any - this is the tab that is selected
     */
    const onSelectLeftMenu = (tabSelect: LeftMenu) => {
        const width = document.getElementById("content-main")?.clientWidth;
        if (parseInt(width ? width.toString() : "0") <= 767) {
            document
                .querySelector("#content-main__left-bar")
                ?.classList.add("hidden-tab");
        }
        setTabSelected(tabSelect);
        handleLeftMenuSelect(tabSelect);
    };

    return (
        <Nav
            className="flex-column"
            activeKey={LeftMenu.Home}
        >
            {/* Home TOPページ */}
            <Nav.Item className="flex-row flex-row-1" onClick={() => onSelectLeftMenu(LeftMenu.Home)}>
                <TopPageIcon
                    color={
                        tabSelected === LeftMenu.Home
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.Home} className={
                    tabSelected === LeftMenu.Home
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["top_page"])}
                </Nav.Link>
            </Nav.Item>
            {/* Make An Item アイテムをつくる */}
            <Nav.Item className="flex-row" onClick={() => onSelectLeftMenu(LeftMenu.MakeItems)}>
                <MakeItemsIcon
                    color={
                        tabSelected === LeftMenu.MakeItems
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.MakeItems} className={
                    tabSelected === LeftMenu.MakeItems
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["make_items"])}
                </Nav.Link>
            </Nav.Item>
            {/* Created Item List 作成したアイテム一覧 */}
            <Nav.Item className="flex-row" onClick={() => onSelectLeftMenu(LeftMenu.ItemList)}>
                <ItemListIcon
                    color={
                        tabSelected === LeftMenu.ItemList
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.ItemList} className={
                    tabSelected === LeftMenu.ItemList
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["item_list"])}
                </Nav.Link>
            </Nav.Item>
            {/* Order 注文する */}
            <Nav.Item className="flex-row" onClick={() => onSelectLeftMenu(LeftMenu.Order)}>
                <OrderIcon
                    color={
                        tabSelected === LeftMenu.Order
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.Order} className={
                    tabSelected === LeftMenu.Order
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["order"])}
                </Nav.Link>
            </Nav.Item>
            {/* Approve 承認する */}
            <Nav.Item className="flex-row" onClick={() => onSelectLeftMenu(LeftMenu.Approve)}>
                <ApproveIcon
                    color={
                        tabSelected === LeftMenu.Approve
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.Approve} className={
                    tabSelected === LeftMenu.Approve
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["approve"])}
                </Nav.Link>
            </Nav.Item>
            {/* Order List 注文一覧 */}
            <Nav.Item className="flex-row" onClick={() => onSelectLeftMenu(LeftMenu.OrderList)}>
                <OrderListIcon
                    color={
                        tabSelected === LeftMenu.OrderList
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.OrderList} className={
                    tabSelected === LeftMenu.OrderList
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["order_list"])}
                </Nav.Link>
            </Nav.Item>
            {/* Team チーム */}
            <Nav.Item className="flex-row" onClick={() => onSelectLeftMenu(LeftMenu.Team)}>
                <TeamIcon
                    color={
                        tabSelected === LeftMenu.Team
                            ? "var(--black-color)"
                            : "var(--gray-color)"
                    }
                />
                <Nav.Link eventKey={LeftMenu.Team} className={
                    tabSelected === LeftMenu.Team
                        ? "nav-link__label nav-link__label-active"
                        : "nav-link__label"
                }>
                    {Translator.translate("navigation", ["team"])}
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};
/*********************************************** */
//       Define property of components            /
/*********************************************** */
export interface NavigationProps {
    handleLeftMenuSelect: any;
}

/*********************************************** */
//       Connect component to Redux store         /
/*********************************************** */
const mapStateToProps = (state: any) => {
    return {};
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleLeftMenuSelect: (leftMenuSelected: LeftMenu) => {
            dispatch({
                type: Types.SET_LEFT_MENU_SELECT,
                payload: leftMenuSelected,
            });
            // show loading when requesting API get data
            // dispatch({
            //     type: Types.SET_LOADING_DATA
            // });
        },
    };
};

export const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationCP);
