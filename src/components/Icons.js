"use client";
export function OverviewIcon({ className }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			height="19"
			viewBox="0 0 18 19"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m18 8.59282v8.66718c0 .3978-.158.7794-.4393 1.0607s-.6629.4393-1.0607.4393h-3.75c-.3978 0-.7794-.158-1.0607-.4393s-.4393-.6629-.4393-1.0607v-3.75c0-.1989-.079-.3897-.2197-.5303-.1406-.1407-.3314-.2197-.5303-.2197h-3c-.19891 0-.38968.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303v3.75c0 .3978-.15804.7794-.43934 1.0607s-.66284.4393-1.06066.4393h-3.75c-.39782 0-.779356-.158-1.06066-.4393-.281305-.2813-.43933998-.6629-.43933998-1.0607v-8.66718c-.00003156-.20761.04303048-.41295.12646098-.60305.08343-.1901.205412-.36081.358226-.50133l7.500003-7.07625.01031-.010313c.27613-.251125.63597-.3902803 1.00922-.3902803s.73308.1391553 1.00918.3902803c.0032.003669.0067.007114.0103.010313l7.5 7.07625c.1513.14126.2717.3123.3537.50237.082.19006.1237.39503.1226.60201z" />
		</svg>
	);
}
export function MinimizeIcon({ open }) {
	return (
		<svg
			className={`${!open && "rotate-180 duration-300"}`}
			fill="none"
			height="20"
			viewBox="0 0 20 20"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m14.0001 5.26002v8.99998c0 .1989-.079.3897-.2197.5304-.1406.1406-.3314.2196-.5303.2196h-2.25v3.75c.0001.1484-.0438.2936-.1262.417-.0824.1235-.1996.2197-.3367.2765s-.288.0717-.4336.0427c-.14554-.029-.27923-.1005-.38412-.2056l-9.000003-9c-.069733-.0696-.125052-.1523-.162795-.2434-.037743-.09102-.05717-.18862-.05717-.28718s.019427-.19615.05717-.2872.093062-.17377.162795-.24342l9.000003-9.000004c.10489-.105009.23858-.1765346.38412-.2055224.1456-.02898777.2965-.0141343.4336.0426801.1371.0568143.2543.1530353.3367.2764803s.1263.268565.1262.416987v3.749999h2.25c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033zm2.25-.75c-.1989 0-.3897.07902-.5303.21967-.1407.14065-.2197.33142-.2197.53033v8.99998c0 .1989.079.3897.2197.5304.1406.1406.3314.2196.5303.2196s.3897-.079.5303-.2196c.1407-.1407.2197-.3315.2197-.5304v-8.99998c0-.19891-.079-.38968-.2197-.53033-.1406-.14065-.3314-.21967-.5303-.21967zm3 0c-.1989 0-.3897.07902-.5303.21967-.1407.14065-.2197.33142-.2197.53033v8.99998c0 .1989.079.3897.2197.5304.1406.1406.3314.2196.5303.2196s.3897-.079.5303-.2196c.1407-.1407.2197-.3315.2197-.5304v-8.99998c0-.19891-.079-.38968-.2197-.53033-.1406-.14065-.3314-.21967-.5303-.21967z"
				fill="#b3b3b3"
			/>
		</svg>
	);
}
export function TransactionsIcon({ className }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			height="18"
			viewBox="0 0 18 18"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m8.19292 12.9731c.05684.1371.07178.2879.04291.4334s-.10025.2792-.2051.3841l-3 3c-.06966.0698-.15237.1251-.24342.1628-.09105.0378-.18865.0572-.28721.0572s-.19615-.0194-.2872-.0572c-.09105-.0377-.17377-.093-.24342-.1628l-3.000003-3c-.105008-.1048-.176534-.2385-.205522-.3841-.028987-.1456-.014134-.2965.04268-.4336.056815-.1371.153035-.2543.276485-.3367.12344-.0824.26856-.1263.41698-.1262h2.25v-11.24998c0-.19891.07902-.389678.21967-.53033.14066-.140652.33142-.21967.53033-.21967.19892 0 .38968.079018.53033.21967s.21967.33142.21967.53033v11.24998h2.25c.14834 0 .29333.0441.41665.1265s.21943.1996.27617.3366zm8.83778-9.24371-3-2.999995c-.0696-.069732-.1523-.125051-.2434-.162795-.091-.037743-.1886-.05717-.2872-.05717s-.1962.019427-.2872.05717c-.091.037744-.1738.093063-.2434.162795l-3.00002 2.999995c-.10501.1049-.17654.23859-.20552.38415-.02899.14556-.01414.29646.04268.43357.05681.13712.15303.2543.27646.3367.1235.0824.2686.12633.417.12621h2.25v11.24998c0 .1989.079.3897.2197.5303.1406.1407.3314.2197.5303.2197s.3897-.079.5303-.2197c.1407-.1406.2197-.3314.2197-.5303v-11.24998h2.25c.1484.00012.2935-.04381.417-.12621.1234-.0824.2197-.19958.2765-.3367.0568-.13711.0716-.28801.0426-.43357-.0289-.14556-.1005-.27925-.2055-.38415z" />
		</svg>
	);
}
export function BudgetIcon({ className }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			height="20"
			viewBox="0 0 20 20"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m.32038 8.59187c.221475-1.85713.98107-3.60899 2.18531-5.04.13325-.16068.29856-.29177.48537-.38491.18681-.09313.391-.14625.59951-.15595.20851-.00971.41675.02421.61141.09958.19465.07538.37143.19055.51902.33816l2.59407 2.64937c.24982.24925.40292.57919.43194.93089.02902.35171-.06792.70228-.27351.98911-.15572.22092-.273.46656-.34687.72656-.02347.07671-.07091.14388-.13537.19164-.06446.04775-.14253.07357-.22276.07368h-6.074995c-.052937.00008-.105292-.01104-.153622-.03264s-.091539-.05319-.126785-.09268c-.035246-.0395-.06173-.08601-.077711-.13648s-.021095-.10374-.015007-.15633zm10.56002-8.57625c-.2072-.01806747-.4159.0071461-.6128.0740394-.1969.0668936-.37778.1740046-.53109.3145316-.15331.140528-.27573.3114-.35947.501766-.08374.190363-.12698.396063-.12697.604033v3.81282c-.00259.35379.12106.69691.34874.96772.22768.27082.54449.45156.89349.50978.6571.10841 1.2595.43241 1.7121.92093.4527.48852.73 1.11379.7881 1.77727.0581.66349-.1062 1.32739-.4671 1.88719-.3608.5598-.8977.9836-1.526 1.2046-.0731.0269-.1362.0755-.1808.1394s-.0685.1399-.0685.2178v6.1153c-.0004.0531.0105.1057.032.1542.0215.0486.0531.092.0926.1275.0395.0354.0861.0621.1367.0782s.104.0212.1568.0151c2.3399-.2889 4.4967-1.4131 6.0735-3.1658s2.4676-4.016 2.5084-6.37326c.0703-5.08968-3.826-9.431245-8.8697-9.88312zm-1.88815 12.57188c-.41923-.1495-.79993-.3905-1.1145-.7054-.31458-.3149-.55514-.6958-.70425-1.1152-.02556-.0744-.07354-.139-.13733-.185-.0638-.046-.14027-.0711-.21892-.0719h-6.124683c-.053006-.0003-.105481.0106-.153964.032s-.091873.0529-.127308.0923c-.035436.0394-.062111.0859-.078267.1364s-.021425.1038-.015461.1565c.262606 2.1669 1.244093 4.1833 2.787573 5.7268s3.55984 2.525 5.7268 2.7876c.05267.0059.10601.0007.15649-.0155.05049-.0162.09697-.0428.1364-.0783.03942-.0354.07088-.0788.0923-.1273.02143-.0485.03233-.1009.032-.1539v-6.1191c.00015-.0793-.02454-.1567-.07061-.2213-.04608-.0645-.11121-.113-.18627-.1387z" />
		</svg>
	);
}
export function PotsIcon({ className }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			height="22"
			viewBox="0 0 18 22"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m14.25 3.33595v-1.57594c0-.39782-.158-.779356-.4393-1.06066-.2813-.281305-.6629-.43934-1.0607-.43934h-7.5c-.39782 0-.77936.158035-1.06066.43934-.2813.281304-.43934.66284-.43934 1.06066v1.57594c-.84646.17368-1.60711.634-2.15363 1.30332-.54652.66931-.84545 1.50664-.84637 2.37074v10.49999c0 .9946.39509 1.9484 1.09835 2.6517.70326.7032 1.65709 1.0983 2.65165 1.0983h9c.9946 0 1.9484-.3951 2.6517-1.0983.7032-.7033 1.0983-1.6571 1.0983-2.6517v-10.49999c-.0009-.8641-.2999-1.70143-.8464-2.37074-.5465-.66932-1.3071-1.12964-2.1536-1.30332zm-6-1.57594h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5zm4.5 14.24999v.75c0 .1989-.07902.3897-.21967.5303-.14065.1407-.33142.2197-.53033.2197s-.38968-.079-.53033-.2197c-.14065-.1406-.21967-.3314-.21967-.5303v-.75h-.75c-.19891 0-.38968-.079-.53033-.2197-.14065-.1406-.21967-.3314-.21967-.5303s.07902-.3897.21967-.5303c.14065-.1407.33142-.2197.53033-.2197h2.25c.19891 0 .3897-.079.5303-.2197.1407-.1406.2197-.3314.2197-.5303s-.079-.3897-.2197-.5303c-.1406-.1407-.33139-.2197-.5303-.2197h-1.5c-.59674 0-1.16903-.237-1.59099-.659s-.65901-.9943-.65901-1.591.23705-1.16902.65901-1.59098.99425-.65901 1.59099-.65901v-.75c0-.19891.07902-.38968.21967-.53033s.33142-.21967.53033-.21967.38968.07902.53033.21967.21967.33142.21967.53033v.75h.75c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033c-.1406.14065-.3314.21966-.5303.21966h-2.25c-.19891 0-.38968.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303s.07902.3897.21967.5303c.14065.1407.33142.2197.53033.2197h1.5c.5967 0 1.169.2371 1.591.659.4219.422.659.9943.659 1.591s-.2371 1.169-.659 1.591c-.422.422-.9943.659-1.591.659zm3-12.74999h-1.5v-1.5h1.5z" />
		</svg>
	);
}
export function RecurringIcon({ className }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			height="17"
			viewBox="0 0 20 17"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m18.25.51001h-16.5c-.39782 0-.779356.158035-1.06066.43934-.281305.2813-.43934.66284-.43934 1.06066v14.24999c.000068.1278.032807.2535.095109.3651.062302.1117.152099.2055.260865.2727.108766.0671.232893.1054.360595.1111.127701.0057.254741-.0214.369061-.0786l2.66437-1.3322 2.66437 1.3322c.1042.0522.21911.0793.33563.0793s.23143-.0271.33563-.0793l2.66437-1.3322 2.6644 1.3322c.1042.0522.2191.0793.3356.0793s.2314-.0271.3356-.0793l2.6644-1.3322 2.6644 1.3322c.1143.0572.2413.0843.369.0786s.2519-.044.3606-.1111c.1088-.0672.1986-.161.2609-.2727.0623-.1116.095-.2373.0951-.3651v-14.24999c0-.39782-.158-.77936-.4393-1.06066-.2813-.281305-.6629-.43934-1.0607-.43934zm-3.75 9.74999h-9c-.19891 0-.38968-.079-.53033-.2197-.14065-.14061-.21967-.33138-.21967-.53029s.07902-.38968.21967-.53033.33142-.21967.53033-.21967h9c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53029c-.1406.1407-.3314.2197-.5303.2197zm0-2.99999h-9c-.19891 0-.38968-.07902-.53033-.21967s-.21967-.33142-.21967-.53033.07902-.38968.21967-.53033.33142-.21967.53033-.21967h9c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033c-.1406.14065-.3314.21967-.5303.21967z" />
		</svg>
	);
}
export function SortMobileIcon({ isOpenSort, setIsOpenSort }) {
	return (
		<svg
			onClick={() => setIsOpenSort(!isOpenSort)}
			fill="none"
			height="15"
			viewBox="0 0 16 15"
			width="16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m14.25 0h-12.5c-.33152 0-.64946.131696-.883884.366116-.23442.234421-.366116.552363-.366116.883884v12.5c0 .3315.131696.6495.366116.8839.234424.2344.552364.3661.883884.3661h12.5c.3315 0 .6495-.1317.8839-.3661s.3661-.5524.3661-.8839v-12.5c0-.331521-.1317-.649463-.3661-.883884-.2344-.23442-.5524-.366116-.8839-.366116zm-10.625 3.125h7.5c.1658 0 .3247.06585.4419.18306.1173.11721.1831.27618.1831.44194s-.0658.32473-.1831.44194c-.1172.11721-.2761.18306-.4419.18306h-7.5c-.16576 0-.32473-.06585-.44194-.18306s-.18306-.27618-.18306-.44194.06585-.32473.18306-.44194.27618-.18306.44194-.18306zm3.125 8.75h-3.125c-.16576 0-.32473-.0658-.44194-.1831-.11721-.1172-.18306-.2761-.18306-.4419s.06585-.3247.18306-.4419c.11721-.1173.27618-.1831.44194-.1831h3.125c.16576 0 .32473.0658.44194.1831.11721.1172.18306.2761.18306.4419s-.06585.3247-.18306.4419c-.11721.1173-.27618.1831-.44194.1831zm.625-3.75h-3.75c-.16576 0-.32473-.06585-.44194-.18306s-.18306-.27618-.18306-.44194.06585-.32473.18306-.44194.27618-.18306.44194-.18306h3.75c.16576 0 .32473.06585.44194.18306s.18306.27618.18306.44194-.06585.32473-.18306.44194-.27618.18306-.44194.18306zm6.0672 2.3172-1.875 1.875c-.0581.0581-.127.1042-.2029.1357-.0758.0314-.1572.0476-.2393.0476s-.1635-.0162-.2393-.0476c-.0759-.0315-.1448-.0776-.2029-.1357l-1.87499-1.875c-.11727-.1173-.18316-.2763-.18316-.4422 0-.16585.06589-.32491.18316-.44219.11728-.11727.27634-.18316.44219-.18316s.32491.06589.44219.18316l.80781.80859v-3.4914c0-.16576.0658-.32473.1831-.44194.1172-.11721.2761-.18306.4419-.18306s.3247.06585.4419.18306c.1173.11721.1831.27618.1831.44194v3.4914l.8078-.80859c.1173-.11727.2763-.18316.4422-.18316s.3249.06589.4422.18316c.1173.11728.1831.27634.1831.44219 0 .1659-.0658.3249-.1831.4422z"
				fill="#201f24"
			/>
		</svg>
	);
}
export function FilterMobileIcon({ isOpenCategory, setIsOpenCategory }) {
	return (
		<svg
			onClick={() => setIsOpenCategory(!isOpenCategory)}
			fill="none"
			height="16"
			viewBox="0 0 18 16"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m16.7976 2.71562-.0062.00704-5.2914 5.65v4.33514c.0003.2062-.0504.4092-.1476.5911-.0972.1818-.2379.3368-.4095.4511l-2.49995 1.6672c-.1884.1255-.40734.1975-.63344.2082-.22611.0108-.45091-.04-.65039-.147s-.36616-.2662-.48225-.4605-.17723-.4165-.17689-.6429v-6.00234l-5.29141-5.65-.00625-.00704c-.16269-.17905-.269938-.40146-.308716-.64026s-.007425-.48373.090256-.70506c.09768-.22133.25749-.409563.46005-.541857.20255-.132294.43914-.202966.68107-.203443h13.75002c.2421.000024.479.070368.6819.202485.2029.132118.3631.320325.4611.541745.0979.22142.1295.46653.0908.70555-.0387.23901-.146.46165-.3088.64084z"
				fill="#201f24"
			/>
		</svg>
	);
}
export function SearchIcon({ className }) {
	return (
		<svg
			className={className}
			fill="none"
			height="14"
			viewBox="0 0 14 14"
			width="14"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m13.3538 13.1462-3.1294-3.1287c.907-1.08894 1.3593-2.48564 1.2628-3.89955-.0966-1.41391-.7345-2.73618-1.78109-3.69173-1.0466-.95555-2.42131-1.470821-3.83815-1.438621-1.41683.032201-2.76671.609391-3.76883 1.611501-1.00211 1.00212-1.579301 2.352-1.611501 3.76883-.0322 1.41684.483071 2.79155 1.438621 3.83817.95556 1.0466 2.27782 1.6845 3.69173 1.781 1.41391.0966 2.81061-.3557 3.89954-1.2627l3.12878 3.1293c.0464.0465.1016.0833.1623.1085.0607.0251.1257.0381.1914.0381s.1308-.013.1915-.0381c.0607-.0252.1158-.062.1623-.1085.0464-.0464.0833-.1016.1084-.1623.0252-.0607.0381-.1257.0381-.1914s-.0129-.1308-.0381-.1915c-.0251-.0607-.062-.1158-.1084-.1623zm-11.85378-6.64621c0-.89002.26392-1.76005.75839-2.50007.49446-.74002 1.19727-1.31679 2.01954-1.65739.82226-.34059 1.72706-.42971 2.59998-.25607.87291.17363 1.67473.60221 2.30407 1.23155s1.0579 1.43116 1.2316 2.30407c.1736.87292.0845 1.77772-.2561 2.59999-.34062.82226-.91739 1.52507-1.65741 2.01953-.74002.4945-1.61005.7584-2.50007.7584-1.19307-.0013-2.33689-.4759-3.18052-1.31949-.84363-.84363-1.31816-1.98745-1.31948-3.18052z"
				fill="#201f24"
			/>
		</svg>
	);
}
export function DropdownIcon({ open }) {
	return (
		<svg
			className={`transform transition-transform duration-300 ${
				open ? "rotate-180" : "rotate-0"
			}`}
			fill="none"
			height="6"
			viewBox="0 0 12 6"
			width="12"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m11.3538.85375-5.00002 5c-.04644.04649-.10158.08337-.16228.10853s-.12576.03811-.19147.03811-.13077-.01295-.19147-.03811-.11585-.06204-.16228-.10853l-5.000002-5c-.070006-.069927-.11769-.159054-.137015-.256096-.019325-.097043-.009423-.197638.028453-.289049.037877-.091412.102024-.16953.18432-.224465.082297-.0549354.179044-.08421771.277994-.08413985h9.99997c.099-.00007786.1957.02920445.278.08413985.0823.054935.1465.133053.1843.224465.0379.091411.0478.192006.0285.289049-.0193.097042-.067.186169-.137.256096z"
				fill="#201f24"
			/>
		</svg>
	);
}
