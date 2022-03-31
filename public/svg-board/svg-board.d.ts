export {}

declare global {
	/**
	 * 메인 클래스
	 * @class
	 */
	class SvgBoard {
		/**
		 * 생성자
		 * @const
		 * @param $options 설정 값
		 */
		constructor($options: SvgBoardConstructorOptions);

		/**
		 * 데이터
		 * @const
		 * @return {SvgBoardData}
		 */
		getData(): SvgBoardData;

		/**
		 * 배경 이미지
		 * @return {BackgroundImage}
		 */
		getBackgroundImage(): BackgroundImage;

		/**
		 * 배경 영상
		 * @return {BackgroundVideo}
		 */
		getBackgroundVideo(): BackgroundVideo;

		/**
		 * 레이어 추가
		 * @param [$index=마지막_인덱스] 인덱스
		 */
		addLayer($index?: number);

		/**
		 * 레이어 보이기
		 * @param {number} $index 인덱스
		 */
		showLayer($index: number);

		/**
		 * 레이어 감추기
		 * @param {number} $index 인덱스
		 */
		hideLayer($index: number);

		/**
		 * 선택된 Feature 반환
		 * @return {Feature}
		 */
		getFocusFeature(): Feature;

		/**
		 * Feature 선택
		 * @param {string} $featureId
		 */
		setFocusFeature($featureId: string);

		/**
		 * 이미지 불러오기
		 * @const
		 * @param {LoadImageOptions} $options
		 */
		loadImage($options: LoadImageOptions);

		/**
		 * 이미지 제거
		 */
		unloadImage();

		/**
		 * 영상 불러오기
		 * @const
		 * @param {LoadVideoOptions} $options
		 */
		loadVideo($options: LoadVideoOptions);

		/**
		 * 영상 제거
		 */
		unloadVideo();

		/**
		 * Feature 추가
		 * @param {AddFeatureOptions} $options
		 * @param {Skeleton|Rect} $options.type Feature 유형
		 * @return {Skeleton | Rect}
		 */
		addFeature($options: AddFeatureOptions): Skeleton | Rect;

		/**
		 * 뼈대 Feature 추가
		 * @const
		 * @param {AddSkeletonFeatureOptions} [$options=] 설정 값
		 * @return {Skeleton} Feature
		 */
		addSkeletonFeature($options: AddSkeletonFeatureOptions): Skeleton;

		/**
		 * 뼈대 Feature 추가
		 * @const
		 * @param {Skeleton} $skeleton 뼈대 Feature
		 * @return {Skeleton} Feature
		 */
		addSkeletonFeatureByObject($skeleton: Skeleton): Skeleton;

		/**
		 * 사각형 Feature 추가
		 * @const
		 * @param {AddRectFeatureOptions} [$options=] 설정 값
		 * @return {Rect} Feature
		 */
		addRectFeature($options: AddRectFeatureOptions): Rect;

		/**
		 * 사각형 Feature 추가
		 * @const
		 * @param {Rect} $rect 사각형 Feature
		 * @return {Rect} Feature
		 */
		addRectFeatureByObject($rect: Rect): Rect;

		/**
		 * Feature 삭제
		 * @const
		 * @param {string} $id Feature ID
		 */
		removeFeature($id: string);

		/**
		 * 모든 Feature를 삭제
		 */
		clearFeatures();

		/**
		 * SVG 크기 반환
		 * @const
		 * @return {{width: number, height: number}}
		 */
		getSize(): { width: number, height: number }

		/**
		 * SVG 크기 설정
		 * @const
		 * @param $options 설정 값
		 * @param {number} $options.width 가로
		 * @param {number} $options.height 세로
		 */
		setSize($options: { width: number, height: number });

		/**
		 * 포커스 오브젝트가 변경되었을 때 이벤트
		 * @const
		 * @param {function(Feature)} $callback
		 */
		addFocusObjectChangeEventListener($callback: (feature: Feature) => void);

		/**
		 * svg 요소의 중앙 좌표 반환
		 * @const
		 * @return {{x: number, y: number}} 중앙 좌표
		 */
		getCenterXY(): { x: number, y: number };

		/**
		 * Json to SvgBoard
		 * @const
		 * @param {{}} $json
		 */
		fromJson($json: any);

		/**
		 * SvgBoard to Json
		 * @const
		 * @return {}
		 */
		toJson(): any;
	}

	/**
	 * 메인 생성자 설정값
	 * @property {string} elementSelector 컨테이너 셀렉터
	 * @property {number} [layerSize=1] 레이어 크기
	 * @property {string} [width=640px] 가로길이
	 * @property {string} [height=480px] 세로길이
	 */
	interface SvgBoardConstructorOptions {
		elementSelector: string,
		layerSize?: number,
		width?: string,
		height?: string
	}

	/**
	 * 메인 데이터
	 * @property {Feature} focusObject 활성화 된 Feature
	 * @property {string} rootWidth 부모 레이아웃의 가로길이
	 * @property {string} rootHeight 부모 레이아웃의 세로길이
	 * @property {number} width SvgBoard의 가로길이
	 * @property {number} height SvgBoard의 세로길이
	 * @property {number} x 스크롤X
	 * @property {number} y 스크롤Y
	 */
	interface SvgBoardData {
		focusObject: Feature,
		rootWidth: string,
		rootHeight: string,
		width: number,
		height: number,
		x: number,
		y: number
	}

	/**
	 * 이미지 불러오기 설정 값
	 * @property {string} imageUrl 이미지 경로
	 * @property {function(Event)} [callback=] 콜백함수
	 */
	interface LoadImageOptions {
		imageUrl: string,
		callback?: (event: Event) => void
	}

	/**
	 * 영상 불러오기 설정 값
	 * @property {string} videoUrl 동영상 경로
	 * @property {number} [fps=30] 비디오 프레임
	 * @property {function(Event)} [callback=] 콜백함수
	 */
	interface LoadVideoOptions {
		videoUrl: string,
		fps?: number,
		callback?: (event: Event) => void
	}

	/**
	 * Feature 추가 설정 값
	 * @property {Skeleton|Rect} type Feature 유형
	 */
	interface AddFeatureOptions extends AddSkeletonFeatureOptions, AddRectFeatureOptions {
		type: Skeleton | Rect
	}

	/**
	 * 뼈대 Feature 추가 설정값
	 * @property {number} [layerIndex=0] 레이어 인덱스
	 * @property {string} [id=UUID] ID
	 * @property {string} [name=ID] Feature명
	 * @property {number} [x=CenterX] X
	 * @property {number} [y=CenterY] Y
	 * @property {undefined|0|1|2|3|4|5|6|7|8|9|10|11} [colorSetId=] 색상세트ID
	 * @property {JointJson[]} [jointJsons=] 관절JSON 정보
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface AddSkeletonFeatureOptions {
		layerIndex?: number,
		id?: string,
		name: string,
		x: number,
		y: number,
		colorSetId?: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
		jointJsons?: JointJson[]
		metaData: any
	}

	/**
	 * 사각형 Feature 추가 설정값
	 * @property {number} [layerIndex=0] 레이어 인덱스
	 * @property {string} [id=UUID] ID
	 * @property {string} [name=ID] Feature명
	 * @property {number} [x=CenterX] X
	 * @property {number} [y=CenterY] Y
	 * @property {number} [width=50] 가로길이
	 * @property {number} [height=50] 세로길이
	 * @property {undefined|0|1|2|3|4|5|6|7|8|9|10|11} [colorSetId=] 색상세트ID
	 * @property {string} [description=] 주석
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface AddRectFeatureOptions {
		layerIndex?: number,
		id?: string,
		name: string,
		x: number,
		y: number,
		width: number,
		height: number,
		colorSetId?: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
		description: string,
		metaData: any
	}

	/**
	 * Feature 클래스
	 * @class
	 */
	class Feature {
		/**
		 * 생성자
		 * @const
		 * @param {FeatureConstructorOptions} $options
		 */
		constructor($options: FeatureConstructorOptions);

		/**
		 * 인스턴스 정리 (구현필요)
		 * @const
		 */
		destroy();

		/**
		 * Feature to Json (구현필요)
		 * @const
		 * @return {{}}
		 */
		toJson();
	}

	/**
	 * 생성자 설정 값
	 * @property {SvgBoard} main 메인 인스턴스
	 * @property {string} type 유형
	 * @property {string} id ID
	 * @property {string} name Feature명
	 * @property {number} [layerIndex=] 레이어 인덱스
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface FeatureConstructorOptions {
		main: SvgBoard,
		type: string,
		id: string,
		name: string,
		layerIndex?: number
		metaData: any
	}

	/**
	 * 뼈대 클래스
	 * @class
	 */
	class Skeleton {
		/**
		 * 생성자
		 * @const
		 * @param {SkeletonConstructorOptions} $options 설정 값
		 */
		constructor($options: SkeletonConstructorOptions);

		/**
		 * 데이터
		 * @const
		 * @return {SkeletonData}
		 */
		getData(): SkeletonData;

		/**
		 * 뼈대를 드래그 시작했을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDragStartEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 뼈대를 드래그가 끝났을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDragEndEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 뼈대 보이기
		 * @const
		 */
		show();

		/**
		 * 뼈대 감추기
		 * @const
		 */
		hide();

		/**
		 * 관절 활성
		 * @const
		 * @param {number} $index 관절 인덱스 (0~14)
		 */
		enableJointByIndex($index: number);

		/**
		 * 관절 비활성
		 * @const
		 * @param {number} $index 관절 인덱스 (0~14)
		 */
		disableJointByIndex($index: number);

		/**
		 * 중앙점 교정 (첫 번째 관절 기준으로 중앙 맞춤)
		 * @const
		 */
		fixCenter();

		/**
		 * 인스턴스 정리
		 * @override
		 * @const
		 */
		destroy();

		/**
		 * Skeleton to Json
		 * @const
		 * @return {SkeletonJson}
		 */
		toJson(): SkeletonJson;
	}

	/**
	 * 뼈대 생성자 설정값
	 * @property {SvgBoard} main 메인 인스턴스
	 * @property {string} [id=UUID] ID
	 * @property {string} [name=ID] Feature명
	 * @property {number} layerIndex 레이어 인덱스
	 * @property {number} [x=0] X
	 * @property {number} [y=0] Y
	 * @property {JointJson[]} [jointJsons=기본 관절] 관절 목록
	 * @property {undefined|0|1|2|3|4|5|6|7|8|9|10|11} [colorSetId=] 색상세트ID
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface SkeletonConstructorOptions {
		main: SvgBoard,
		id?: string,
		name?: string,
		layerIndex: number,
		x?: number,
		y?: number,
		jointJsons?: JointJson[],
		colorSetId?: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
		metaData: any
	}

	/**
	 * 뼈대 데이터
	 * @property {boolean} focus 포커스 여부
	 * @property {boolean} isShow 출력 여부
	 * @property {number} x X
	 * @property {number} y Y
	 * @property {number} width 가로길이
	 * @property {number} height 세로길이
	 * @property {undefined|0|1|2|3|4|5|6|7|8|9|10|11} colorSetId 색상세트 ID
	 */
	interface SkeletonData {
		focus: boolean,
		isShow: boolean,
		x: number,
		y: number,
		width: number,
		height: number
	}


	/**
	 * 뼈대 직렬화 포맷
	 * @property {string} type 유형 (Skeleton 고정)
	 * @property {string} id ID
	 * @property {string} name 뼈대명
	 * @property {number} layerIndex 뼈대 레이아웃 인덱스
	 * @property {number} x X
	 * @property {number} y Y
	 * @property {JointJson[]} joints 관절 목록
	 * @property {number} colorSetId 색상테마 ID
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface SkeletonJson {
		type: string,
		id: string,
		name: string,
		layerIndex: number,
		x: number,
		y: number,
		joints: JointJson[],
		colorSetId: number,
		metaData: any
	}

	/**
	 * 관절 클래스
	 * @class
	 */
	class Joint {
		/**
		 * 생성자
		 * @const
		 * @param {JointConstructorOptions} $options 설정 값
		 */
		constructor($options);

		/**
		 * 데이터
		 * @const
		 * @return {JointData}
		 */
		getData(): JointData;

		/**
		 * 관절을 드래그 시작했을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDragStartEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 관절을 드래그 중일 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDraggingEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 관절을 드래그가 끝났을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDragEndEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 관절 데이터가 변경되었을 때 이벤트
		 * @const
		 * @param {function} $callback
		 */
		addChangeEventListener($callback: () => void);

		/**
		 * 인스턴스 정리
		 * @override
		 * @const
		 */
		destroy();

		/**
		 * Joint to Json
		 * @override
		 * @const
		 * @return {JointJson}
		 */
		toJson();
	}

	/**
	 * 관절 생성자 설정 값
	 * @property {SvgBoard} main 메인 인스턴스
	 * @property {string} [id=UUID] ID
	 * @property {string} [name=ID] Feature명
	 * @property {number} [x=0] X
	 * @property {number} [y=0] Y
	 * @property {number} [r=10] 반지름
	 * @property {string} [parentId] 부모 ID
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface JointConstructorOptions {
		main: SvgBoard,
		id?: string,
		name?: string,
		x?: number,
		y?: number,
		r?: number,
		parentId: string,
		metaData: any
	}

	/**
	 * 관절 데이터
	 * @property {boolean} focus 현재 포커스 여부
	 * @property {number} x X
	 * @property {number} y Y
	 * @property {number} r 반지름
	 */
	interface JointData {
		focus: boolean,
		x: number,
		y: number,
		r: number
	}

	/**
	 * 관절 직렬화 포맷
	 * @property {string} type
	 * @property {string} id
	 * @property {string} name
	 * @property {number} x
	 * @property {number} y
	 * @property {number} r
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface JointJson {
		type: string,
		id: string,
		name: string,
		x: number,
		y: number,
		r: number,
		metaData: any
	}

	/**
	 * 링크 클래스
	 * @class
	 */
	class Link {
		/**
		 * 생성자
		 * @param {LinkConstructorOptions} $options 설정 값
		 */
		constructor($options);

		/**
		 * 데이터
		 * @const
		 * @return {LinkData}
		 */
		getData(): LinkData;

		/**
		 * 인스턴스 정리
		 * @override
		 */
		destroy();
	}

	/**
	 * 링크 생성자 설정 값
	 * @property {SvgBoard} main 메인 인스턴스
	 * @property {string} [id=UUID] ID
	 * @property {string} [name=ID] Feature명
	 * @property {Joint} joint1 조인트1
	 * @property {Joint} joint2 조인트2
	 * @property {string} parentId 부모 ID
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface LinkConstructorOptions {
		main: SvgBoard,
		id?: string,
		name?: string,
		joint1: Joint,
		joint2: Joint,
		parentId: string,
		metaData: any
	}

	/**
	 * 링크 데이터
	 * @property {boolean} focus 현재 포커스 여부
	 * @property {number} x1 X1
	 * @property {number} y1 Y1
	 * @property {number} x2 X2
	 * @property {number} y2 Y2
	 */
	interface LinkData {
		focus: boolean,
		x1: number,
		y1: number,
		x2: number,
		y2: number
	}

	/**
	 * 사각형 클래스
	 * @class
	 */
	class Rect {
		/**
		 * 생성자
		 * @const
		 * @param {RectConstructorOptions} $options 설정 값
		 */
		constructor($options: RectConstructorOptions);

		/**
		 * 데이터
		 * @const
		 * @return {RectData}
		 */
		getData(): RectData;

		/**
		 * 사각형을 드래그 시작했을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDragStartEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 사각형의 드래그가 끝났을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addDragEndEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 사각형을 리사이즈 시작했을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addResizeStartEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 사각형의 리사이즈가 끝났을 때 이벤트
		 * @const
		 * @param {function(MouseEvent)} $callback
		 */
		addResizeEndEventListener($callback: (event: MouseEvent) => void);

		/**
		 * 뼈대 보이기
		 * @const
		 */
		show();

		/**
		 * 뼈대 감추기
		 * @const
		 */
		hide();

		/**
		 * 인스턴스 정리
		 * @override
		 * @const
		 */
		destroy();

		/**
		 * Rect to Json
		 * @override
		 * @const
		 * @return {RectJson}
		 */
		toJson(): RectJson;
	}

	/**
	 * 사각형 생성자 설정 값
	 * @property {SvgBoard} main 메인 인스턴스
	 * @property {string} [id=UUID] ID
	 * @property {string} [name=ID] Feature명
	 * @property {number} layerIndex 레이어 인덱스
	 * @property {number} [x=0] X
	 * @property {number} [y=0] Y
	 * @property {number} [width=0] X
	 * @property {number} [height=0] Y
	 * @property {undefined|0|1|2|3|4|5|6|7|8|9|10|11} [colorSetId=] 색상세트ID
	 * @property {string} [description=] 주석
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface RectConstructorOptions {
		main: SvgBoard,
		id?: string,
		name?: string,
		layerIndex: number,
		x?: number,
		y?: number,
		width?: number,
		height?: number,
		colorSetId?: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
		metaData: any
	}

	/**
	 * 사각형 데이터
	 * @property {boolean} focus 현재 포커스 여부
	 * @property {boolean} isShow 출력 여부
	 * @property {number} x X
	 * @property {number} y Y
	 * @property {number} width 가로길이
	 * @property {number} height 세로길이
	 * @property {undefined|0|1|2|3|4|5|6|7|8|9|10|11} [colorSetId=] 색상세트 ID
	 * @property {string} [description=] 주석
	 */
	interface RectData {
		focus: boolean,
		isShow: boolean,
		x: number,
		y: number,
		width: number,
		height: number,
		colorSetId: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
		description: string
	}

	/**
	 * 사각형 직렬화 포맷
	 * @property {string} type 유형 (Rect 고정)
	 * @property {string} id ID
	 * @property {string} name 사각형명
	 * @property {number} layerIndex 사각형 레이아웃 인덱스
	 * @property {number} x X
	 * @property {number} y Y
	 * @property {number} width 가로길이
	 * @property {number} height 세로길이
	 * @property {number} colorSetId 색상테마 ID
	 * @property {{}} [metaData=] 메타데이터
	 */
	interface RectJson {
		type: string,
		id: string,
		name: string,
		layerIndex: number,
		x: number,
		y: number,
		width: number,
		height: number,
		colorSetId: number,
		metaData: any
	}

	/**
	 * 배경 이미지
	 * @class
	 */
	class BackgroundImage {
		/**
		 * 생성자
		 * @const
		 * @param {BackgroundImageConstructorOptions} $options 설정 값
		 */
		constructor($options: BackgroundImageConstructorOptions);

		/**
		 * 데이터
		 * @return {BackgroundImageData}
		 */
		getData();

		/**
		 * 이미지 불러오기
		 * @const
		 * @param {BackgroundImageLoad} $options
		 */
		load($options: BackgroundImageLoad);

		/**
		 * 이미지 제거
		 * @const
		 */
		unload();

		/**
		 * 이미지 로드 시 콜백함수 실행
		 * @const
		 * @param {function(Image)} $callback
		 */
		addImageLoadEventListener($callback: (image: ImageBitmap) => void);
	}

	/**
	 * 배경 이미지 생성자 설정 값
	 * @property {SvgBoard} main 메인 인스턴스
	 */
	interface BackgroundImageConstructorOptions {
		main: SvgBoard
	}

	/**
	 * 배경 이미지 데이터 Proxy
	 * @property {number} x 스크롤X
	 * @property {number} y 스크롤Y
	 */
	interface BackgroundImageData {
		x: number,
		y: number
	}

	/**
	 * 배경 이미지 불러오기 설정 값
	 * @property {string} imageUrl 배경 이미지 URL
	 * @property {function(Event)} [callback=] 콜백함수
	 */
	interface BackgroundImageLoad {
		imageUrl: string,
		callback: (event: Event) => void
	}

	class BackgroundVideo {
		/**
		 * 생성자
		 * @const
		 * @param {BackgroundVideoConstructorOptions} $options 설정 값
		 */
		constructor($options: BackgroundVideoConstructorOptions);

		/**
		 * 데이터
		 * @return {BackgroundVideoData}
		 */
		getData();

		/**
		 * 영상 불러오기
		 * @const
		 * @param {BackgroundVideoLoadOptions} $options 영상 불러오기 설정 값
		 */
		load($options: BackgroundVideoLoadOptions);

		/**
		 * 영상 제거
		 * @const
		 */
		unload();

		/**
		 * 영상 재생
		 * @param {function()} [$callback=] 콜백 함수
		 */
		play($callback?: () => void);

		/**
		 * 프레임 기반 영상 재생
		 */
		playFrame();

		/**
		 * 영상 일시중지
		 */
		pause();

		/**
		 * 프레임 이동
		 * @param {number} $frameIndex
		 */
		moveFrame($frameIndex: number);

		/**
		 * Load 시작 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoLoadStartEventListener($callback: (video: VideoConfiguration) => void);

		/**
		 * Load 완료 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoLoadEndEventListener($callback: (video: VideoConfiguration) => void);

		/**
		 * Play 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoPlayEventListener($callback: (video: VideoConfiguration) => void);

		/**
		 * Frame 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoFrameEventListener($callback: (video: VideoConfiguration) => void);

		/**
		 * Pause 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoPauseEventListener($callback: (video: VideoConfiguration) => void);

		/**
		 * Ended 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoEndedEventListener($callback: (video: VideoConfiguration) => void);

		/**
		 * Waiting 콜백함수 실행
		 * @const
		 * @param {function(Video)} $callback
		 */
		addVideoWaitingEventListener($callback: (video: VideoConfiguration) => void)
	}

	/**
	 * 배경 영상 생성자 설정 값
	 * @property {SvgBoard} main 메인 인스턴스
	 */
	interface BackgroundVideoConstructorOptions {
		main: SvgBoard
	}

	/**
	 * 배경 영상 데이터 Proxy
	 * @property {number} x 스크롤X
	 * @property {number} y 스크롤Y
	 */
	interface BackgroundVideoData {
		x: number,
		y: number
	}

	/**
	 * 영상 불러오기 설정 값
	 * @property {string} videoUrl 동영상 경로
	 * @property {number} [fps=30] 비디오 프레임
	 * @property {function(Event)} [callback=] 콜백함수
	 */
	interface BackgroundVideoLoadOptions {
		videoUrl: string,
		fps?: number,
		callback?: (event: Event) => void
	}
}
