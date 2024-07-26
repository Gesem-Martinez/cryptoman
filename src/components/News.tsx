import React from "react";
import {
  Select,
  Typography,
  Row,
  Col,
  Avatar,
  Card,
  ConfigProvider,
  theme,
} from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import "../styles/News.css";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const { darkAlgorithm } = theme;

export default function News({ simplified = false }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews?.data);

  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <>
        <h2 className="section-title">News</h2>
        {!cryptoNews?.data ? (
          <p>Loading ...</p>
        ) : (
          <div className="news-container">
            <Row gutter={[24, 24]}>
              {cryptoNews.data.map((news, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <Card hoverable className="news-card">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "inherit" }}
                    >
                      <div className="news-image-container">
                        <Title className="news-title" level={4}>
                          {news.title}
                        </Title>
                        <img
                          className="news-image"
                          src={news?.photo_url || demoImage}
                          alt="news"
                        />
                      </div>
                      <p>
                        {news.snippet > 100
                          ? `${news.snippet.substring(0, 100)}...`
                          : news.snippet}
                      </p>
                      <div className="provider-container">
                        <div>
                          <Avatar
                            src={news.source_favicon_url || demoImage}
                            alt="news"
                          />
                          <Text className="provider-name">
                            {new URL(news.source_url).host}
                          </Text>
                        </div>
                        <Text>
                          {moment(news.published_datetime_utc)
                            .startOf("ss")
                            .fromNow()}
                        </Text>
                      </div>
                    </a>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </>
    </ConfigProvider>
  );
}
