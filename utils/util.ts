export const formatTime = (timestamp: number) => {
	const date = new Date(timestamp).getDate();
	const month = new Date(timestamp).getMonth() - 1;
	const year = new Date(timestamp).getFullYear();
	return `${year}年${month}月${date}日`;
};
