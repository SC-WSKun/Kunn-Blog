import React from "react";
import { formatTime } from "@/utils/util";
import { useState } from "react";
import ArrowDown from "@/public/arrowDown.svg";

type Article = {
	title: string;
	releaseTime: number;
	tag?: string;
};
type DirectoryType = {
	title: string;
	articleList: (Article | DirectoryType)[];
};

const isDirectory = (item: unknown) => {
	// 确保 item 是一个对象且不为 null
	if (typeof item !== "object" || item === null) {
		return false;
	}
	const hasTitle = "title" in item && typeof item.title === "string";
	const hasArticleList = "articleList" in item;
	return hasTitle && hasArticleList;
};

const isArticle = (item: unknown): item is Article => {
	// 确保 item 是一个对象且不为 null
	if (typeof item !== "object" || item === null) {
		return false;
	}

	// 检查必需的属性
	const hasTitle = "title" in item && typeof item.title === "string";
	const hasReleaseTime =
		"releaseTime" in item && typeof item.releaseTime === "number";

	// tag 是可选的，不需要检查
	return hasTitle && hasReleaseTime;
};
export const Directory: React.FC = () => {
	const [directoryList] = useState<(DirectoryType | Article)[]>([
		{ title: "111", releaseTime: 66666666 },
	]);

	const RenderArticle = (article: Article) => {
		return (
			<div className="article">
				<p className="article__title">{article.title}</p>
				<p className="article__release-time">
					{formatTime(article.releaseTime)}
				</p>
			</div>
		);
	};

	const RenderDirectory = (directory: DirectoryType) => {
		const [showSublist, setShowSublist] = useState<boolean>(false);
		const toggleShowSublist = () => {
			setShowSublist((preState) => !preState);
		};
		return (
			<div className="directory">
				<div className="directory-item">
					<p>{directory.title}</p>
					<ArrowDown onClick={toggleShowSublist} />
				</div>
				{showSublist &&
					!!directory.articleList &&
					RenderDirectoryList(directory.articleList)}
			</div>
		);
	};

	const RenderDirectoryList = (items: (Article | DirectoryType)[]) => {
		return items.map((item) => {
			if (isArticle(item)) {
				return RenderArticle(item);
			}
			if (isDirectory(item)) {
				return RenderDirectory(item);
			}
		});
	};

	return (
		<div className="directory__wrap">{RenderDirectoryList(directoryList)}</div>
	);
};
