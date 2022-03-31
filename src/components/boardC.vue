<template>
	<div class="bo">

		<h2>게시판</h2>
		<a href="javascript:;" @click="getList">데이터 접근</a>
		<b-table striped hover :items="boardList" :fields="fields"></b-table>

	</div>
</template>
<script>
	const boardList=new Array();
	import axios from 'axios'
	export default {
		name: 'boardC',
		methods:{
			getList(){
				axios.get("http://localhost:8081/vue/board")
				.then((res)=>{
					console.log("데이터값:",res.data)
					console.log("데이터값:",res.data.length)
					for(let i=0 ; i<res.data.length; i++){
						boardList[i]=res.data[i]
						console.log("이름",boardList[i])
						console.log("타입",typeof boardList[i])

					}

					console.log("뛰어넘은건가")

				})
				.then((error)=>{
					console.log("error:",error)
				})

			}
		},
		data(){
			console.log("어디인가",boardList)
			return {
				fields:['Name', 'Title', 'fileOriginalName'],
				boardList,

			}
		},
		mounted () {
			axios.get("http://localhost:8081/vue/board")
			  .then((res)=>{
				  console.log("데이터값:",res.data)
				  console.log("데이터값:",res.data.length)
				  for(let i=0 ; i<res.data.length; i++){
					  boardList[i]=res.data[i]
					  console.log("보오오드",boardList)
				  }
				  console.log("타입",typeof boardList[i])
				  console.log("뛰어넘은건가")

			  })
			  .then((error)=>{
				  console.log("error:",error)
			  })
		}
	}
</script>
