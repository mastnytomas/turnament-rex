import { Button, Col, Divider, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
	return (
		<>
			<Divider>
				<Title>TurnamenT-Rex</Title>
				<Title level={4}>Create, participate, advance and keep winning!</Title>
			</Divider>
			<Divider>
				<Row>
					<Col span={10}>
						<Divider>
							<Link to="/createTurnament">
								<Button size={"large"}>Create</Button>
							</Link>
						</Divider>
					</Col>
					<Col span={4}></Col>
					<Col span={10}>
						<Divider>
							<Link to="/joinTurnament">
								<Button size={"large"}>Join</Button>
							</Link>
						</Divider>
					</Col>
				</Row>
			</Divider>
		</>
	);
};

export default Home;
