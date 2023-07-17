import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";

import { Menu as MenuAntd } from "antd";

const Menu = () => {
	return (
		<MenuAntd mode="horizontal" defaultSelectedKeys={["mail"]}>
			<MenuAntd.Item key="mail" icon={<MailOutlined />}>
				Navigation One
			</MenuAntd.Item>
			<MenuAntd.SubMenu
				key="SubMenuAntd"
				title="Navigation Two - SubMenuAntd"
				icon={<SettingOutlined />}
			>
				<MenuAntd.Item key="two" icon={<AppstoreOutlined />}>
					Navigation Two
				</MenuAntd.Item>
				<MenuAntd.Item key="three" icon={<AppstoreOutlined />}>
					Navigation Three
				</MenuAntd.Item>
				<MenuAntd.ItemGroup title="Item Group">
					<MenuAntd.Item key="four" icon={<AppstoreOutlined />}>
						Navigation Four
					</MenuAntd.Item>
					<MenuAntd.Item key="five" icon={<AppstoreOutlined />}>
						Navigation Five
					</MenuAntd.Item>
				</MenuAntd.ItemGroup>
			</MenuAntd.SubMenu>
		</MenuAntd>
	);
};

export default Menu;
