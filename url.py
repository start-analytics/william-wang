import os
import json
from datetime import datetime

# 定义图片和评论文件夹路径
image_dir = "insta_images"
output_file = "public/insta_data.json"  # React 项目中可以访问的 JSON 文件

# 初始化数据列表
portfolio_data = []

# 遍历图片目录
for file in os.listdir(image_dir):
    if file.endswith(".jpg"):
        # 图片路径
        image_path = f"/{image_dir}/{file}"

        # 获取图片的创建日期
        creation_time = os.path.getctime(os.path.join(image_dir, file))
        title = datetime.fromtimestamp(creation_time).strftime('%Y-%m-%d %H:%M:%S')  # 格式化为日期时间字符串
        description = "No comments available"  # 默认描述

        # 获取对应的评论文件路径
        txt_file = os.path.join(image_dir, file.replace(".jpg", ".txt"))

        # 如果评论文件存在，读取全部评论
        if os.path.exists(txt_file):
            with open(txt_file, "r", encoding="utf-8") as f:
                comments = f.readlines()
            
            # 拼接所有评论，用换行符分隔
            if comments:
                description = "\n".join([comment.strip() for comment in comments])

        # 将数据添加到列表
        portfolio_data.append({
            "src": image_path,
            "title": title,
            "description": description
        })

# 保存为 JSON 文件
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(portfolio_data, f, indent=4, ensure_ascii=False)  # 保留 Unicode 字符

print(f"JSON 数据已生成，共 {len(portfolio_data)} 条记录")
