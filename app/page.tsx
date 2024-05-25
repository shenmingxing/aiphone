import React from 'react'
import Link from "next/link"

export default function page() {
  return <div>

    <div className="relative px-8" >
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative " >
          <img src="/iphone/ai_call.png" className="rounded-lg object-cover object-center" alt="Image 1" />
        </div>



        <div className="g:py-8 text-center md:text-left  ml-10">
          <h2

            className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
          >
            小海豚智能外呼
          </h2>
          <p

            className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
          >
            智能外呼机器人是一个款可以代替真人，自动拨打电话的智能语音系统，每天外呼量能够达到600-800个，并能够根据跟客户交流情况，自动筛选意向客户，产品适用于证券、金融、房产、保险、催收、教育、装修等各大行业。
          </p>

          <Link
            href="/ai_call_case"
            title="智能外呼"
            className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            相关案例
          </Link>
        </div>
      </div>
    </div>

    <div className="relative px-8" >
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative ">
          <img src="/iphone/ai_tel.png" className="rounded-lg object-cover object-center" alt="Image 1" />
        </div>



        <div className="g:py-8 text-center md:text-left  ml-10">
          <h2

            className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
          >
            小海豚智能电话机
          </h2>
          <p

            className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
          >
            是一款智能解答客户问题的智能电话机，它拥有全方面的知识库内容，7x24小时在线全速响应客户的问题并给出专业
            的回答，同一时间可以服务无数客户，还可以辅助新手客服快速上手业务

          </p>

          <Link
            href="/ai_tel_case"
            title="智能电话机"
            className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            相关案例
          </Link>
        </div>
      </div>
    </div>


    <div className="relative px-8" >
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative ">
          <img src="/iphone/ai_robot.png" className="rounded-lg object-cover object-center" alt="Image 1" />
        </div>



        <div className="g:py-8 text-center md:text-left  ml-10">
          <h2
            className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
          >
            小海豚客服机器人
          </h2>
          <p
            className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
          >
            在传统的客服系统基础上，结合人工智能技术，来促进客户服务自动化和客服
            管理工作智能化的客服系统，帮助企业解决客户服务问题，降低人工成本，提高客服工作效率。
          </p>

          <Link
            href="/ai_customer_case"
            title="智能客服"
            className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            相关案例
          </Link>
        </div>
      </div>
    </div>


  </div>



}
