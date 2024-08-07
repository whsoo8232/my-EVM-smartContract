# os
import sys
import os
import subprocess

# logging
import logging
from logging.handlers import RotatingFileHandler
from logging.handlers import TimedRotatingFileHandler

# file
from deployContract import *

#env
from dotenv import load_dotenv
load_dotenv('../Upgradeable/.env')

if __name__ == "__main__":
    python_pgm = os.path.basename(sys.argv[0])

    logger = polygon_set_logger(python_pgm)
    logger.setLevel(logging.DEBUG)

    network = "baseSepolia"

    infuraKey = os.getenv("INFURA_API_KEY")
    etherscanKey = ""

    ownerPK = os.getenv("PRIVATE_KEY1")
    tokenType = "ERC721"
    targetTokenName = "TestV1"
    targetSymbolName = "TVA"
    targetAmount = None

    retCode, retMessage = polygon_deploy_contract(network, infuraKey, etherscanKey, ownerPK, tokenType, targetTokenName, targetSymbolName, targetAmount, logger)
    print(f"retCode=[{retCode}], retMessage=[{retMessage}]")

    print("------------------------------------------")
