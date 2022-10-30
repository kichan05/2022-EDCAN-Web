import glob, os, random

imgs = glob.glob("*.webp")

random.shuffle(imgs)

for n, i in enumerate(imgs):
    print("%s -> bg_%2d.webp" % (i, n))
    os.rename(i, "bg_%2d.webp" % n)