import React from "react";
//import { Select, Typography, Row, Col, Avatar, Card } from "antd";
//import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

export default function News() {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 100,
  });

  console.log(cryptoNews);

  return (
    <div>
      <p>News</p>
    </div>
  );
}
