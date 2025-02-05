import os
import json
import re
from collections import defaultdict
from datetime import datetime

# 图片目录
image_dir = "public/tradingwithw111"
output_file = "public/insta_data.json"

# 初始化帖子数据（使用字典按帖子分组）
posts = defaultdict(lambda: {"src": [], "description": "No comments available", "date": ""})

# 遍历图片目录
for file in os.listdir(image_dir):
    if file.endswith(".jpg"):
        # 提取帖子 ID（去掉 _1, _2 这样的编号）
        post_id = re.sub(r'(_\d+)?\.jpg$', '', file)  # 例如 '2025-01-27_22-34-46_UTC'
        
        # 添加图片路径
        image_path = f"/tradingwithw111/{file}"
        posts[post_id]["src"].append(image_path)

        # 尝试获取发布日期（可以从文件名提取）
        match = re.search(r"(\d{4}-\d{2}-\d{2})", file)
        if match:
            posts[post_id]["date"] = match.group(1)

        # 查找评论文件（只读取一次）
        txt_file = os.path.join(image_dir, post_id + ".txt")
        if os.path.exists(txt_file) and posts[post_id]["description"] == "No comments available":
            with open(txt_file, "r", encoding="utf-8") as f:
                comments = f.readlines()
                if comments:
                    posts[post_id]["description"] = "\n".join([comment.strip() for comment in comments])

# 转换为 JSON 结构
portfolio_data = [
    {"src": post["src"], "description": post["description"], "date": post["date"]}
    for post in posts.values()
]
print(portfolio_data)  # 查看数据是否有效
# 保存 JSON 文件
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(portfolio_data, f, indent=4, ensure_ascii=False)

print(f"JSON 数据已生成，共 {len(portfolio_data)} 个帖子")
