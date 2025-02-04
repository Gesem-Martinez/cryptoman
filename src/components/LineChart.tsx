import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import "../styles/LineChart.css";
import moment from "moment";
import { plugins } from "chart.js";
import { zoom } from "chartjs-plugin-zoom";

const { Title } = Typography;

export default function LineChart({ coinHistory, coinName, currentPrice }) {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString(),
    );
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: "#2c2443",
        borderColor: "#93fcec",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        sugestedMin: 0,
      },
    },
    responsive: true,
    plugins: {
      zoom: {
        limits: {
          y: {min: 'original', max: 'original'},
          y2: {min: 'original', max: 'original'},
        },
        zoom: {
          wheel: {
            enabled: true,
            modifierKey: 'alt',
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
          drag: {
            enabled: true,
          }
        }
      }
    }
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title
            level={5}
            className="price-change"
            style={{
              color: coinHistory?.data?.change < 0 ? "red" : "lightgreen",
            }}
          >
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
}
