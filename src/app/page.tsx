import { FiSend, FiDownload, FiCreditCard, FiDollarSign, FiArrowDown, FiArrowUp, FiShoppingBag, FiHome, FiBarChart2, FiUser, FiPieChart, FiSettings, FiTarget, FiGift } from 'react-icons/fi';
import { BsReceipt, BsSafe, BsPiggyBank, BsGraphUp } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <main className="space-y-8 pb-20">
          {/* Header with balance and accounts */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, John Smith</h1>
                <FiSettings className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800" />
              </div>
              <div className="mt-6 w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">$24,500.00</div>
                    <p className="text-gray-500 dark:text-gray-400">Main Account Balance</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">$157,250.00</div>
                    <p className="text-gray-500 dark:text-gray-400">Total Assets</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <span className="text-green-500 flex items-center"><FiArrowUp className="mr-1" />+15% this month</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600 dark:text-gray-300">Last updated: Today 10:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
              <div className="flex justify-between items-center">
                <span>Checking Account</span>
                <BsSafe className="w-5 h-5" />
              </div>
              <div className="mt-4 text-2xl font-bold">$24,500.00</div>
              <div className="mt-2 text-sm">**** **** **** 1234</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white">
              <div className="flex justify-between items-center">
                <span>Savings Account</span>
                <BsPiggyBank className="w-5 h-5" />
              </div>
              <div className="mt-4 text-2xl font-bold">$82,750.00</div>
              <div className="mt-2 text-sm">**** **** **** 5678</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
              <div className="flex justify-between items-center">
                <span>Investment Account</span>
                <BsGraphUp className="w-5 h-5" />
              </div>
              <div className="mt-4 text-2xl font-bold">$50,000.00</div>
              <div className="mt-2 text-sm">+12.5% YTD Return</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiSend className="w-6 h-6 text-blue-500" />
              <span className="mt-2 text-sm font-medium">Send</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiDownload className="w-6 h-6 text-green-500" />
              <span className="mt-2 text-sm font-medium">Receive</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <BsReceipt className="w-6 h-6 text-purple-500" />
              <span className="mt-2 text-sm font-medium">Pay Bills</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiCreditCard className="w-6 h-6 text-red-500" />
              <span className="mt-2 text-sm font-medium">Cards</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiTarget className="w-6 h-6 text-orange-500" />
              <span className="mt-2 text-sm font-medium">Goals</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiPieChart className="w-6 h-6 text-indigo-500" />
              <span className="mt-2 text-sm font-medium">Invest</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiGift className="w-6 h-6 text-pink-500" />
              <span className="mt-2 text-sm font-medium">Rewards</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FiDollarSign className="w-6 h-6 text-yellow-500" />
              <span className="mt-2 text-sm font-medium">Loans</span>
            </button>
          </div>

          {/* Spending Analytics */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Spending Analytics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-500">Monthly Spending</div>
                <div className="text-2xl font-bold mt-2">$3,240.50</div>
                <div className="text-xs text-red-500 mt-1">+12% from last month</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-500">Biggest Expense</div>
                <div className="text-2xl font-bold mt-2">Shopping</div>
                <div className="text-xs text-gray-500 mt-1">$840.50 this month</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-gray-500">Saved This Month</div>
                <div className="text-2xl font-bold mt-2">$1,500.00</div>
                <div className="text-xs text-green-500 mt-1">On track to goal</div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Transaction History</h2>
              <div className="flex gap-2">
                <select className="text-sm border rounded-lg p-1">
                  <option>All Categories</option>
                  <option>Income</option>
                  <option>Expenses</option>
                  <option>Shopping</option>
                  <option>Bills</option>
                  <option>Entertainment</option>
                </select>
                <select className="text-sm border rounded-lg p-1">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 3 Months</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <FiArrowDown className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Received from John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Today, 2:45 PM</p>
                  </div>
                </div>
                <span className="text-green-500 font-medium">+$250.00</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                    <FiArrowUp className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium">Netflix Subscription</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Yesterday, 3:30 PM</p>
                  </div>
                </div>
                <span className="text-red-500 font-medium">-$14.99</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                    <FiShoppingBag className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Amazon Purchase</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Dec 20, 1:15 PM</p>
                  </div>
                </div>
                <span className="text-red-500 font-medium">-$89.99</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                    <FiDollarSign className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium">Salary Deposit</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Dec 19, 9:00 AM</p>
                  </div>
                </div>
                <span className="text-green-500 font-medium">+$3,500.00</span>
              </div>
            </div>
            
            <button className="mt-4 w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View all transactions
            </button>
          </div>
        </main>

        {/* Bottom Navigation for Mobile */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:hidden">
          <div className="flex justify-around p-4">
            <button className="flex flex-col items-center text-blue-500">
              <FiHome className="w-6 h-6" />
              <span className="mt-1 text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-600">
              <FiBarChart2 className="w-6 h-6" />
              <span className="mt-1 text-xs">Stats</span>
            </button>
            <button className="flex flex-col items-center text-gray-600">
              <FiCreditCard className="w-6 h-6" />
              <span className="mt-1 text-xs">Cards</span>
            </button>
            <button className="flex flex-col items-center text-gray-600">
              <FiUser className="w-6 h-6" />
              <span className="mt-1 text-xs">Profile</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}