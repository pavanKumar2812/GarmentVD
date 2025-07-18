'use client'

import React, { useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

// Dashboard Navigation
const DashboardNav = () => {
  return (
    <nav className="bg-primary-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Venkey Dresses - Manufacturing Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              ← Back to Website
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Stats Cards Component
const StatsCards = () => {
  const stats = [
    { title: 'Daily Production', value: '1,250', unit: 'pieces', change: '+12%', color: 'green' },
    { title: 'Monthly Target', value: '85%', unit: 'completed', change: '+5%', color: 'blue' },
    { title: 'Quality Rate', value: '98.5%', unit: 'passed', change: '+2%', color: 'green' },
    { title: 'Active Orders', value: '24', unit: 'orders', change: '-3%', color: 'yellow' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.unit}</p>
            </div>
            <div className={`text-sm font-medium ${stat.color === 'green' ? 'text-green-600' : stat.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'}`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Production Chart Component
const ProductionChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Uniform Pants',
        data: [320, 280, 350, 400, 380, 290],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Half Pants',
        data: [180, 200, 160, 220, 190, 210],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cotton Pants',
        data: [150, 180, 170, 160, 200, 180],
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1,
      },
      {
        label: 'Jeans',
        data: [120, 140, 130, 150, 160, 140],
        backgroundColor: 'rgba(139, 69, 19, 0.8)',
        borderColor: 'rgba(139, 69, 19, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Weekly Production by Product Type',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <Bar data={data} options={options} />
    </div>
  )
}

// Quality Distribution Chart
const QualityChart = () => {
  const data = {
    labels: ['Passed', 'Minor Issues', 'Major Issues', 'Rejected'],
    datasets: [
      {
        data: [92, 5, 2, 1],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(107, 114, 128, 0.8)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Quality Control Distribution (%)',
      },
    },
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <Doughnut data={data} options={options} />
    </div>
  )
}

// Recent Orders Table
const RecentOrders = () => {
  const orders = [
    { id: 'ORD001', customer: 'ABC School', product: 'Uniform Pants', quantity: 500, status: 'In Progress', priority: 'High' },
    { id: 'ORD002', customer: 'XYZ Corp', product: 'Cotton Pants', quantity: 300, status: 'Completed', priority: 'Medium' },
    { id: 'ORD003', customer: 'Fashion Store', product: 'Jeans', quantity: 200, status: 'Pending', priority: 'Low' },
    { id: 'ORD004', customer: 'Sports Club', product: 'Half Pants', quantity: 150, status: 'In Progress', priority: 'High' },
    { id: 'ORD005', customer: 'Office Complex', product: 'Uniform Pants', quantity: 400, status: 'Quality Check', priority: 'Medium' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Product</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Quantity</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Priority</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-sm text-gray-900">{order.id}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{order.customer}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{order.product}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{order.quantity}</td>
                <td className="px-4 py-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Quality Check' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.priority === 'High' ? 'bg-red-100 text-red-800' :
                    order.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Inventory Status
const InventoryStatus = () => {
  const inventory = [
    { material: 'Cotton Fabric', current: 850, minimum: 500, unit: 'meters', status: 'Good' },
    { material: 'Denim Fabric', current: 320, minimum: 400, unit: 'meters', status: 'Low' },
    { material: 'Buttons', current: 5000, minimum: 2000, unit: 'pieces', status: 'Good' },
    { material: 'Zippers', current: 800, minimum: 1000, unit: 'pieces', status: 'Low' },
    { material: 'Thread', current: 150, minimum: 100, unit: 'spools', status: 'Good' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Inventory Status</h3>
      <div className="space-y-4">
        {inventory.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">{item.material}</p>
              <p className="text-sm text-gray-600">{item.current} {item.unit} available</p>
            </div>
            <div className="text-right">
              <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                item.status === 'Good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {item.status}
              </span>
              <p className="text-xs text-gray-500 mt-1">Min: {item.minimum} {item.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNav />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manufacturing Dashboard</h1>
          <p className="text-gray-600">Real-time overview of production, quality, and inventory</p>
        </div>

        <StatsCards />

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <ProductionChart />
          </div>
          <div>
            <QualityChart />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <RecentOrders />
          </div>
          <div>
            <InventoryStatus />
          </div>
        </div>
      </div>
    </div>
  )
}
