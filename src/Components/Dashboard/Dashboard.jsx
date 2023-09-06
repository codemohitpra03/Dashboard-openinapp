import React, { useEffect, useState } from 'react'
import dashboard from '../../assets/Dashboard-icons/dashboard.png'
import schedules from '../../assets/Dashboard-icons/schedules.png'
import settings from '../../assets/Dashboard-icons/settings.png'
import transactions from '../../assets/Dashboard-icons/transactions.png'
import users from '../../assets/Dashboard-icons/users.png'
import search from '../../assets/Dashboard-icons/search.png'
import totalRevenue from '../../assets/Dashboard-icons/total_revenue.png'
import totalLikes from '../../assets/Dashboard-icons/total_likes.png'
import totalUsers from '../../assets/Dashboard-icons/total_users.png'
import totalTransactions from '../../assets/Dashboard-icons/total_transactions.png'
import notification from '../../assets/Dashboard-icons/notification.png'
import arrow from '../../assets/Dashboard-icons/arrow.png'
import Barchart from '../Chart/Barchart'
import Piechart from '../Chart/Piechart'
import Profile from '../Profile/Profile'
import Barchart_shimmer from '../Chart/Barchart_shimmer'
import Piechart_shimmer from '../Chart/Piechart_shimmer'
// import Piechart from '../Chart/Piechart'

const Dashboard = () => {
	const [code, setCode] = useState("none")
	const [barData, setBarData] = useState([])
	const [pieData, setPieData] = useState([])

	useEffect(() => {
	  
		getBarData();
	  
	}, [])
	useEffect(() => {
	  
		getPieData();
	  
	}, [])

	const getBarData = async() =>{
		const response = await fetch('https://boardback.onrender.com/api/barchartdata');
		const json = await response.json();
		setBarData(json) 
	}
	const getPieData = async() =>{
		const response = await fetch('https://boardback.onrender.com/api/piechartdata');
		const json = await response.json();
		setPieData(json) 
	}
	

  return ( //bg-[#F8FAFF]
    <div className='md:grid  lg:grid-cols-[290px_1fr] max-w-full lg:w-auto min-h-screen font-montserrat bg-[#F8FAFF]'>


		<div id='sidebar' className=' z-50 transition-transform duration-1000 ease-in-out lg:transition-none flex flex-col absolute w-[100vw] -left-[100vw] lg:left-0 top-16 md:top-[4.5rem] h-[70vh] md:h-[70vh] lg:-translate-x-0 lg:top-0 lg:h-auto lg:w-auto lg:relative lg:m-5 lg:rounded-2xl bg-blue-bg lg:flex lg:flex-col lg:justify-between'>
		
			<div className='text-white absolute lg:relative left-8 lg:left-10 top-10 lg:top-14'>
				<p className='font-bold text-4xl '>Board.</p>
				<ul className='my-8 flex font-normal flex-col space-y-6 lg:space-y-0 h-[100%] justify-evenly'>
					<li className={`md:text-xl lg:text cursor-pointer ${(code==="dashboard")?"font-bold":""}`} onClick={()=>setCode("dashboard")}  id='dashboard'><img src={dashboard} className='inline mr-5' width={16} alt="" />Dashboard</li>
					
					<li className={`md:text-xl lg:text-base cursor-pointer ${(code==="transactions")?"font-bold":""}`} onClick={()=>setCode("transactions")} id='transactions'><img src={transactions} className='inline mr-5' width={16} alt="" />Transaction</li>
					
					<li className={`md:text-xl lg:text-base cursor-pointer ${(code==="schedules")?"font-bold":""}`}  onClick={()=>setCode("schedules")} id='schedules'><img src={schedules} className='inline mr-5' width={16} alt="" />Schedules</li>
					
					<li className={`md:text-xl lg:text-base cursor-pointer ${(code==="users")?"font-bold":""}`} onClick={()=>setCode("users")} id='users'><img src={users} className='inline mr-5' width={16} alt="" />Users</li>
					
					<li className={`md:text-xl lg:text-base cursor-pointer ${(code==="settings")?"font-bold":""}`}  onClick={()=>setCode("settings")} id='settings'><img src={settings} className='inline mr-5' width={16} alt="" />Settings</li>
				</ul>
			</div>
			<div className='text-white text-sm absolute bottom-7 left-8 flex space-x-36 lg:space-x-0 lg:block lg:relative lg:left-10 lg:bottom-10'>
				<p className='md:text-lg lg:text-base lg:mb-3 cursor-pointer'>Help</p>
				<p className='md:text-lg lg:text-base lg:mt-3 cursor-pointer'>Contact Us</p>
			</div>
		</div>
		<div>
		
			<div className=' lg:flex  lg:justify-between p-2 lg:p-0 w-full lg:w-auto items-center lg:mt-9 lg:mx-7'>
				<p className='hidden lg:block lg:font-bold lg:text-2xl'>Dashboard</p>

				<div className='flex items-center justify-between max-w-[90vw] md:max-w-full  lg:w-auto'>
					<div id='openmenu' className='inline-block p-4 cursor-pointer lg:hidden' onClick={()=>{
						document.getElementById('sidebar').classList.add("translate-x-[100vw]");
						document.getElementById('closemenu').classList.remove("hidden");
						document.getElementById('openmenu').classList.add("hidden");
					}}>
						<div className='h-0.5 md:h-[3px] w-6 md:w-8 my-1 bg-black'></div>
						<div className='h-0.5 md:h-[3px] w-6 md:w-8 my-1 bg-black'></div>
						<div className='h-0.5 md:h-[3px] w-4 md:w-6 my-1 bg-black'></div>
					</div>

					<div id="closemenu" className='hidden w-[56px]  md:h-[57px] md:w-[63px] p-4  border-black border-[1] lg:hidden' onClick={()=>{
						document.getElementById('sidebar').classList.remove("translate-x-[100vw]");
						document.getElementById('closemenu').classList.add("hidden");
						document.getElementById('openmenu').classList.remove("hidden");
					}}>
						<div className="h-[22px] md:h-[26px] w-[2px] md:w-[3px] ml-[12px] bg-black rotate-45 z-[1]">
							<div className="h-[22px] md:h-[26px] w-[2px] md:w-[3px] bg-black rotate-90 z-2"></div>
						</div>
					</div>
					<div className='lg:mx-1'> 
						<div className='flex items-center'>
							<input type="text" name=""  placeholder='Search...' className=' lg:bg-white font-lato p-4 lg:p-2 rounded-l-lg h-4 lg:h-8 w-[100px] md:w-72 lg:w-32  outline-none'/>
							<div className=''>
								<button className='flex items-center bg-white p-4 lg:p-2 h-4 lg:h-8 rounded-r-lg'>
									<img className='lg:block lg:mr-6' src={search} width={16} alt="" />
								</button>

							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<div className='mx-5 lg:mx-5 cursor-pointer'> 
							<img src={notification} width={16} alt="" />
						</div>
						<div className='ml-1 md:mx-5 lg:mx-1 cursor-pointer'><img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQhm2AY8DAyn3hDdh8tLCHX39IQZt4POWcA&usqp=CAU" width={30} alt="" /></div>
					</div>
				</div>	
			</div>

			<div className='max-w-[90vw] md:ml-7 lg:ml-2 lg:w-auto lg:grid space-y-4 lg:space-y-0  lg:grid-cols-2 lg:grid-cols-4 my-7 m-2'>
				{/* stats */}
				<div className='w-[90vw] mx-3 lg:mx-0 lg:w-[225px] px-4 py-3 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226]'>
					
					<img className='w-12 inline lg:block lg:w-10 lg:w-8' src={totalRevenue} alt="" />
					<p className='inline mx-3 lg:mx-0 font-bold text-xl lg:font-normal lg:mb-1 lg:mt-2 font-lato lg:text-xs'>Total Revenues</p>
					<div className='flex justify-between '>
						<p className='font-opensans font-bold text-xl mx-2 mt-4 lg:mx-0 lg:mt-0'>$2,129,430</p>
						<div className='flex mt-4 lg:mt-0 '>
							
							<div className='bg-[#E9F9EB] px-2 rounded-3xl'>
								<span className='text-[#3CC952] text-[10px] font-figtree font-semibold'>+2.5%</span>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[90vw] mx-3 lg:mx-0 lg:w-[225px] px-4 py-3 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226]'>
					<img className='w-12 inline lg:block lg:w-10 lg:w-8' src={totalTransactions} alt="" />
					<p className='inline mx-3 lg:mx-0 font-bold text-xl lg:font-normal lg:mb-1 lg:mt-2 font-lato lg:text-xs'>Total Transactions</p>
					<div className='flex justify-between '>
						<p className='font-opensans font-bold text-xl mx-2 mt-4 lg:mx-0 lg:mt-0'>1,520</p>
						<div className='flex  mt-4 lg:mt-0'>
							
							<div className='bg-[#E9F9EB] px-2 rounded-3xl'>
								<span className='text-[#3CC952] text-[10px] font-figtree font-semibold'>+1.7%</span>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[90vw] mx-3 lg:mx-0 lg:w-[225px] px-4 py-3 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226]'>
					<img className='w-12 inline lg:block lg:w-10 lg:w-8' src={totalLikes} alt="" />
					<p className='inline mx-3 lg:mx-0 font-bold text-xl lg:font-normal lg:mb-1 lg:mt-2 font-lato lg:text-xs'>Total Likes</p>
					<div className='flex justify-between '>
						<p className='font-opensans font-bold text-xl mx-2 mt-4 lg:mx-0 lg:mt-0'>9,721</p>
						<div className='flex mt-4 lg:mt-0'>
							
							<div className='bg-[#E9F9EB] px-2 rounded-3xl'>
								<span className='text-[#3CC952] text-[10px] font-figtree font-semibold'>+1.4%</span>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[90vw] mx-3 lg:mx-0 lg:w-[225px] px-4 py-3 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226]'>
					<img className='w-12 inline lg:block lg:w-10 lg:w-8' src={totalUsers} alt="" />
					<p className='inline mx-3 lg:mx-0 font-bold text-xl lg:font-normal lg:mb-1 lg:mt-2 font-lato lg:text-xs'>Total Users</p>
					<div className='flex justify-between '>
						<p className='font-opensans font-bold text-xl mx-2 mt-4 lg:mx-0 lg:mt-0'>9,721</p>
						<div className='flex mt-4 lg:mt-0'>
							
							<div className='bg-[#E9F9EB] px-2 rounded-3xl'>
								<span className='text-[#3CC952] text-[10px] font-figtree font-semibold'>+4.2%</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				{
					
					barData.length===0?<Barchart_shimmer/>:<Barchart data={barData} />
				}
				
			</div>

			<div className='lg:grid lg:grid-cols-2'>
				<div>
				
					{pieData.length===0?<Piechart_shimmer/>:<Piechart data={pieData}/>}
					{/* piechart */}
				</div>
				<div><Profile/></div>
			</div>

		</div>
		
    </div>
  )
}

export default Dashboard