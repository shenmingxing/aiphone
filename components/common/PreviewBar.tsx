"use client"
import React, { useState } from 'react';

import { FaTelegram } from "react-icons/fa";
import styles from '@styles/df.module.css';





/**
 * This is a preview bar that is enabled by default to handle viewing content in preview & live mode, remove this for production use.
 **/

// import React, { useState } from'react';

const PreviewBar = () => {
	return (
		<div className="sticky top-0 z-50 text-red-600 text-2xl font-bold">

			{/* <!-- 预览栏内容 --> */}
			<div className="bg-white bg-opacity-84 p-12 flex items-center justify-between">
				<span>
				外呼系统软件技术引领者
				</span>



				<div className="flex items-end" >
					<span>微信:&nbsp;</span>
					<img src="/iphone/wechat.jpg" className={`w-8 h-8  transition-transform duration-300 ease-in-out hover:scale-2000 ${styles.zoomable} } `} />
						&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="https://t.me/zhuozi123" target="_blank" rel="noreferrer" title="智能外呼" >
						<div className="flex items-end">
							<span>Telegram:&nbsp;</span>
							<FaTelegram className="inline" size="32px" title="智能外呼" />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default PreviewBar
