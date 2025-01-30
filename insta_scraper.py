import instaloader
import datetime

# 配置部分
USERNAME = "dian_ljc215"  # 你的 Instagram 用户名
TARGET_USERNAME = "tradingwithw111"  # 目标用户
SESSION_FILE = "session-dian_ljc215.txt"  # 你的 session 文件

# 初始化 Instaloader
loader = instaloader.Instaloader()

# 载入已保存的 session，避免频繁登录
try:
    loader.load_session_from_file(USERNAME, SESSION_FILE)
except FileNotFoundError:
    print("Session 文件未找到，请先手动登录一次！")
    exit()

# 下载目标用户的最新数据
print(f"[{datetime.datetime.now()}] 正在抓取 {TARGET_USERNAME} 的 Instagram 页面...")
loader.download_profile(TARGET_USERNAME, profile_pic_only=False)
print("抓取完成！")

with open("instaloader_log.txt", "a") as log_file:
    log_file.write(f"[{datetime.datetime.now()}] 已完成 {TARGET_USERNAME} 的抓取任务。\n")
