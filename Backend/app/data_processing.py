
import sys
import numpy as np
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
import pandas as pd


colorlist = ['red', 'blue', 'green', 'brown', 'black', 'yellow']

num_classes = 6

def get_class_colors(x, y, n_classes):
    x_data, y_data = {i:[] for i in range(n_classes)},{i:[] for i in range(n_classes)}
    #print(x_data, y_data)
    for feat, lab in zip(x,y):
        #print(feat)
        #print(lab)
        x_data[lab].append(feat[0])
        y_data[lab].append(feat[1])
    return x_data, y_data

def process():
    data = []
    fname = "/home/haitu/Uni/BP_testing/Backend/app/dataout.txt"
    with open(fname, 'r') as lines:
        for line in lines:
            splits = line.strip().split('\t')
            label = int(splits[0])
            features = np.fromstring(splits[-1], sep=' ')
            data.append((label, features))
    x_features = [x for _,x in data]
    labels = [y for y,_ in data]
    tsne_reduced_features = TSNE(n_components=2,perplexity=50).fit_transform(x_features)
    x_dat, y_dat = get_class_colors(tsne_reduced_features, labels, num_classes)

    plt.title("TSNE data")
    for i, col in zip(sorted(x_dat.keys()),colorlist) :
        plt.scatter(x_dat[i], y_dat[i], color=col)
    plt.show()
    plt.savefig("/home/haitu/Uni/BP_testing/Backend/app/graph.png")