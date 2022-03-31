<template>
	<div class="footer">
		<div id="board"/>
		<div>
			<button class="first" @click="onClick">버튼</button>
		</div>

		<div id="board2">
		</div>
		<div class="first">
			<button @click="onClick2">버튼</button>
			<button @click="showJson">json</button>
			<button @click="unloadImage">숨기기</button>
		</div>
		<!--		{{this.board.getData()}}-->
	</div>
</template>

<style>
	.first {
		position: relative;
		bottom: 100px;
		left: 500px;
	}
</style>
<script lang="ts">


    // @ is an alias to /src
    import Vue from 'vue'
    import {uuid} from 'vue-uuid';
    import '../../public/svg-board/svg-board.css'
    import '../../public/svg-board/svg-board'

    export default Vue.extend({
        name: 'WorkSpace',
        components: {},

        data() {

            return {
                uuid: uuid.v1(),
                board: undefined,
                board2: undefined,
                // skeleton: new Skeleton({
                //     layerIndex: 0, main: undefined, metaData: undefined
                //
                // }),
                // rect:new Rect({
                //     	main: this.board,
                //     	id: this.uuid,
                //     	name: "1st",
                //     	layerIndex: 0,
                //     	x: 300,
                //     	y: 300,
                //         width: 20,
                //         height: 20,
                //     	colorSetId: 3,
                //     	metaData: undefined
                // }),
            }
        },
        methods: {
            unloadImage() {
                this.board2.unloadImage()
            },
	        showJson() {
              console.log(this.board2.toJson());
	        },
            onClick2() {
                this.board2.addSkeletonFeature({
                    metaData: undefined,
                    name: "",
                    x: 60,
                    y: 60
                });
                this.board2.getBackgroundImage();
                // this.board2.addSkeletonFeatureByObject();
            },

            onClick() {

                // this.board.addRectFeatureByObject(this.rect)
                return this.board.addRectFeature({
                    description: "",
                    height: 60,
                    metaData: undefined,
                    name: "",
                    width: 60,
                    x: 60,
                    y: 60,
                    colorSetId: 6,
                    id: uuid
                    // layerIndex:1

                })
                // console.log(this.board.getBackgroundImage())
            }
        },
        mounted() {
            console.log('푸터 마운트')
            // eslint-disable-next-line no-undef
            this.board = new SvgBoard({
                elementSelector: '#board',
                layerSize: 1,
                width: '400px',
                height: '400px',
            })
            this.board.loadImage({
                imageUrl: 'https://file.mk.co.kr/meet/yonhap/2021/05/30/image_readtop_2021_518799_0_135812.jpg'
            })
            this.board2 = new SvgBoard({
                elementSelector: "#board2",
                height: "440px",
                layerSize: 1,
                width: "440px"

            })
            this.board2.loadImage({
                imageUrl: 'https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-company-business-business-company-friendly-man-greeting-man-png-image_336981.jpg'
            })


            // this.rect = new Rect({
            //     colorSetId: undefined,
            //     height: 0,
            //     id: "",
            //     layerIndex: 0,
            //     main: undefined,
            //     metaData: undefined,
            //     name: "",
            //     width: 0,
            //     x: 0,
            //     y: 0
            //
            // })
            console.log(this.uuid)
            // // eslint-disable-next-line no-undef
            // const rect=new Rect({
            // 	main: this.board,
            // 	id: this.uuid,
            // 	name: "1st",
            // 	layerIndex: 4,
            // 	x: 300,
            // 	y: 300,
            //     width: 20,
            //     height: 20,
            // 	colorSetId: 3,
            // 	metaData: undefined
            // })

            // this.board.addRectFeatureByObject(this.rect)

            // this.board.addRectFeatureByObject(new Rect({
            // 	main: this.board,
            // 	id: this.uuid,
            // 	name: "1st",
            // 	layerIndex: 4,
            // 	x: 300,
            // 	y: 300,
            // 	colorSetId: 3,
            // 	metaData: meta,
            // }))


        },
        created() {

        },
        beforeCreate() {

        },
        beforeDestroy() {
        },
        // beforeRouteEnter() {
        //
        // }
    })
</script>
