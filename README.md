🌾 AgroTrade AI
AI-Powered Agricultural Market Intelligence Platform

AgroTrade AI is a machine learning-based agricultural market intelligence platform designed to help farmers, traders, and agricultural stakeholders make data-driven decisions. The platform provides crop price prediction, profit analysis, seasonal insights, and market trend forecasting using predictive analytics and machine learning.

🚀 Features
📈 Crop Price Prediction

Predicts crop prices using a trained Random Forest Regressor model based on historical agricultural market data.

💰 Profit Analysis

Estimates potential profit by combining predicted market prices with production costs.

🌱 Seasonal Insights

Analyzes seasonal trends and patterns affecting crop prices and profitability.

📊 Market Trend Analysis

Visualizes historical price trends and market behavior through interactive charts and analytics.

🔐 Secure Authentication

User authentication and access management powered by Firebase Authentication.

🎯 Problem Statement

Agricultural markets often experience significant price fluctuations due to seasonal changes, demand-supply imbalances, and regional market variations. These uncertainties make it difficult for farmers to plan production and maximize profits.

AgroTrade AI aims to reduce this uncertainty by leveraging machine learning and predictive analytics to provide actionable market insights.

🧠 Machine Learning Pipeline
Data Collection and Cleaning
Exploratory Data Analysis (EDA)
Feature Engineering
Model Selection and Training
Cross-Validation and Evaluation
Prediction and Deployment
📊 Model Performance
Random Forest Regressor
Metric	Value
R² Score	0.999
MAE	₹29.57
RMSE	₹35.18

The model was evaluated using multiple regression metrics to ensure robust forecasting performance across diverse agricultural datasets.

🛠️ Tech Stack
Machine Learning
Python
Pandas
NumPy
Scikit-learn
Data Visualization
Matplotlib
Seaborn
Frontend
React.js
JavaScript
HTML
CSS
Backend & Database
Firebase Authentication
Firebase Firestore
Development Tools
Git
GitHub

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
