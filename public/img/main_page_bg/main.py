import glob, os

imgs = glob.glob("*.jpg")

for n, i in enumerate(imgs):
    print("%s -> bg_%02d.jpg" % (i, n))
    os.rename(i, "bg_%02d.jpg" % n)